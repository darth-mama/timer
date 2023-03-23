const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timeLeft = 1500; // 25 minutes in seconds
let timerId;

function formatTimeLeft(timeLeft) {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function updateTimer() {
  timerMinutes.textContent = formatTimeLeft(timeLeft).slice(0, 2);
  timerSeconds.textContent = formatTimeLeft(timeLeft).slice(3);
  if (timeLeft === 0) {
    clearInterval(timerId);
    startButton.disabled = false;
    timerMinutes.textContent = '25';
    timerSeconds.textContent = '00';
  } else {
    timeLeft--;
  }
}

function startTimer() {
  startButton.disabled = true;
  timerId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  startButton.disabled = false;
}

function resetTimer() {
  stopTimer();
  timeLeft = 1500;
  timerMinutes.textContent = '25';
  timerSeconds.textContent = '00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
