const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const agust = "17 August 2022";

function countdown() {
    const agustDate = new Date(agust);
    const currentDate = new Date();

    const totalseconds = (agustDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const mins = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    /*
    if(time < 10) {
        return `0${time}`;
    } return time; 
    */
}
countdown();

setInterval(countdown,1000);
