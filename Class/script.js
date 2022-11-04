import Countdown from "./countdown.js"

const $promocao = new Countdown('4 November 2022 12:59:59 GMT-0300')

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setInterval(() => {
    days.innerText = $promocao.total.days
    hours.innerText = $promocao.total.hours
    minutes.innerText = $promocao.total.minutes
    seconds.innerText = $promocao.total.seconds
}, 1000)