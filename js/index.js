const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

let id = null;

function onStartBtn(e) {
  refs.startBtn.disabled = true;
  id = setInterval(e => {
    let i = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.background = colors[i];
  }, 1000);
}
function onStopBtn(e) {
  refs.startBtn.disabled = false;
  clearInterval(id);
}