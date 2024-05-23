let timerInterval;
let totalTime = 6 * 60 * 60; // 6 hours in seconds
let remainingTime = totalTime;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    if (remainingTime <= 0) {
        stopTimer();
        alert("Time's up! Please change or dispose of your sanitary pad.");
        return;
    }

    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;

    remainingTime--;
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

// Start timer automatically when the page loads
window.onload = startTimer;
