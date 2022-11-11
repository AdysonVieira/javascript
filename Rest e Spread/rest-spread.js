// Rest | É possível declararmos um parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função ficarão dentro do parâmetro


function lados(lados, totalLados, ...argumentos) {
    // arguments é um objeto onde armazena todos os argumentos passados
    console.log(arguments) // { '0': 2, '1': 3, '2': 'Olá', '3': 'Oi' }
    // Rest retorna um arrayLike com os argumentos passados que não são usados
    console.log(argumentos) // [ 'Olá', 'Oi' ] 
    return lados * totalLados
}

console.log(lados(2, 3, 'Olá', 'Oi'))


function anunciaGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador} ganhou um ${premio}`)
    })
}

console.log(anunciaGanhadores('celular', 'Adyson', 'Eduarda', 'Maria', 'José'))





// Spread | Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', ...legumes] // [ 'Banana', 'Uva', 'Morango', 'Pizza', 'Cenoura', 'Batata' ]

console.log(comidas)


// O spread pod ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array

const numeroMaximo = Math.max(2, 21, 12, 45, 78, 65) // 78

const listaNumeros = [2, 21, 12, 45, 78, 65]
const numeroMaximoSpread = Math.max(...listaNumeros)

console.log(numeroMaximoSpread)




// spread como argumento
function anunciaGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador} ganhou um ${premio}`)
    })
}

const ganhadores = ['Adyson', 'Eduarda', 'Maria', 'José']

console.log(anunciaGanhadores('celular', ...ganhadores))


// transformando em array com spread

const btns = document.querySelectorAll('button')
const btnSpread = [...btns] // transforma btnSpread em uma array