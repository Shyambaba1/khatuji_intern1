let celciusInput = document.querySelector('#celcius>input')
let farenheitInput = document.querySelector('#farenheit>input')
let kelvinInput = document.querySelector('#kelvin>input')
let btn = document.querySelector('.button button')
function roundNumber(number) {
    return Math.round(number * 100) / 100;
}
celciusInput.addEventListener('input', function () {
    let ctemp = parseFloat(celciusInput.value)
    let ftemp = (ctemp * (9 / 5)) + 32
    let ktemp = ctemp + 273.15
    farenheitInput.value = roundNumber(ftemp)
    kelvinInput.value = roundNumber(ktemp)
})
kelvinInput.addEventListener('input', function () {
    let ktemp = parseFloat(kelvinInput.value)
    let ctemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15) * (9 / 5) + 32
    celciusInput.value = roundNumber(ctemp)
    farenheitInput.value = roundNumber(ftemp)
})
farenheitInput.addEventListener('input', function () {
    let ftemp = parseFloat(farenheitInput.value)
    let ctemp = (ftemp - 32) * (5 / 9)
    let ktemp = (ftemp - 32) * (5 / 9) + 273.15
    celciusInput.value = roundNumber(ctemp)
    kelvinInput.value = roundNumber(ktemp)
})
btn.addEventListener('click', ()=>{
    celciusInput.value=""
    kelvinInput.value=""
    farenheitInput.value=""
})