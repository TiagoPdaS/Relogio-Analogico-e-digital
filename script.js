let digitalElements = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    digitalElements.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    sElement.style.transform = `rotate(${seconds * 6 - 90}deg)`;
    mElement.style.transform = `rotate(${minutes * 6 + seconds / 10 - 90}deg)`;
    hElement.style.transform = `rotate(${hours * 30 + minutes / 2 - 90}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}
    setInterval(updateClock, 1000);
    updateClock();