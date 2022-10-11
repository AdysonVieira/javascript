// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function trocaBg() {
    document.body.classList.toggle('red')
}

setInterval(trocaBg, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
const play = document.getElementById('play')
const pause = document.getElementById('pause')

play.addEventListener('click', initCronometro)
pause.addEventListener('click', pausaTempo)
pause.addEventListener('dblclick', resetaTempo)

let contaHora = 0
let contaMinuto = 0
let contaSegundo = 0
let contaTempo


function initCronometro() {
    play.setAttribute('disabled', '')
    contaTempo = setInterval(()=> {
        segundo.innerText = ++contaSegundo
        if(contaSegundo > 59) {
            contaSegundo = 0
            minuto.innerText = ++contaMinuto
        } else if(contaMinuto > 59) {
            contaMinuto = 0
            hora.innerText = ++contaHora
        }
    }, 1000)
    
    
}

function pausaTempo() {
    clearInterval(contaTempo)
    play.removeAttribute('disabled')
}

function resetaTempo() {
    clearInterval(contaTempo)
    contaHora = 0
    contaMinuto = 0
    contaSegundo = 0
    segundo.innerText = '00'
    minuto.innerText = '00'
    hora.innerText = '00'

    play.removeAttribute('disabled')
}
