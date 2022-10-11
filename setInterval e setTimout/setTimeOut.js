// setTimeout(callback, tempo, arg1, arg2, ...) | método assíncrono que ativa o callback após o tempo. Espera todo o script ser carregado para poder executar

function espera(texto) {
    console.log(texto)
}

setTimeout(espera, 2000, 'Depois de 2s')

setTimeout(() => {
    console.log('Passou 1s')
}, 1000)

// Loops e setTimeout | Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serãp adicionados à Web Api pracimanento no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

setTimeout(() => {
    console.log('Esse vem depois, mesmo com 0')
}, 0)

for(let i = 0; i < 20; i++) {
    console.log(i)
}

for(let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}

// This e Window | setTimeout é um método do Object Window. O valor do this dentro do mesmo callback é uma referência ao seu objeto no caso Window.

const btn = document.querySelector('button')
btn.addEventListener('click', handleClick)

function handleClick(event) {
    setTimeout(function() {
        console.log(this) // Objeto Window
        this.classList.add('active') // Erro
    })
    
    setTimeout(() => {
        console.log(this) // btn | com arrow function o valor do this passa a ser o elemento
        this.classList.add('active') // adiciona a classe

    })
}
