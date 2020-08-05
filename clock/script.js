const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const resetButton = document.querySelector('#reset')

const timer = document.querySelector('.timerValue')

var time = 1000;
var cron;
var hh = 0;
var mm = 0;
var ss = 0;

function start() {
  cron = setInterval(() => {
    ss++
    if (ss === 60) {
      ss = 0
      mm++
      if (mm === 60) {
        mm = 0
        hh++
      }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm)  + ':' + (ss < 10 ? '0' + ss : ss) 
    timer.innerHTML = format
  }, time)
}
function pause() {
  clearTimeout(cron)
}
function reset() {
  clearTimeout(cron)
  hh,mm,ss = 0

  timer.innerHTML = '00:00:00'
}


startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)

