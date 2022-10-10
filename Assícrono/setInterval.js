// setInterval(callback, tempo, arg1, arg2, ...) | Irá ativar o callbak toda vez após a quantidade de tempo passar, criando um loop

function loop(texto) {
    console.log(texto) ;
}
setInterval(loop, 1000, 'Passou 1s')

let i = 0
setInterval(() => {
    console.log(i++)
}, 1000)

// clearInterval(var) | podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInvertval a uma variável

let i = 0
const meuLoop = setInterval(() => {
    console.log(i++)
    if(i > 20) {
        clearInterval(meuLoop)
    }
}, 1000)