const container = document.getElementsByClassName('container')[0];
const header = document.getElementsByTagName('header')[0];

const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secondEl = document.getElementById('seconds');
const texts = document.getElementsByClassName('text');

const dayText = document.getElementById('day-text')
const hourText = document.getElementById('hour-text')
const minText = document.getElementById('min-text')
const secondText = document.getElementById('second-text')

// set here
const newSingleYear = '2022';
const newYear = `1 Jan ${newSingleYear}`;

header.innerHTML = `<h2>New Year's Eve ${newSingleYear}</h2>`

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    if(totalSeconds < 0) {
        clearInterval(countDown);
        container.innerHTML = `<h1 class="end">Happy New Year ${newSingleYear} !!!</h1>`
        return false
    }
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    dayText.textContent = formatText(dayText.classList[0], days)
    hourText.textContent = formatText(hourText.classList[0], hours)
    minText.textContent = formatText(minText.classList[0], mins)
    secondText.textContent = formatText(secondText.classList[0], seconds)

    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function formatText(text, time) {
    let txt = text;
    if(time <= 1) {
        switch(text) {
            case 'day':
                txt = 'Day';
                break;
            case 'hour':
                txt = 'Hour';
                break;
            case 'min':
                txt = 'Minute';
                break;
            case 'second':
                txt = 'Second'
                break;
            default: return
        }
    }
    else {
        switch(text) {
            case 'day':
                txt = 'Days';
                break;
            case 'hour':
                txt = 'Hours';
                break;
            case 'min':
                txt = 'Minutes';
                break;
            case 'second':
                txt = 'Seconds'
                break
            default: return
        }
    }
    return txt
}

setInterval(countDown, 1000)
