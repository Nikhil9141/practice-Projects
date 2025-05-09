let timer;
let seconds = 0;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function formatTime(s) {
  const hrs = String(Math.floor(s / 3600)).padStart(2, "0");
  const mins = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const secs = String(s % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

startBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
});
