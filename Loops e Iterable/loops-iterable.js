// Iterable | São objetos que possuem métodos [Symbol.iterator], geralmente no protótipo, dentro dele a função que lida com iteração será definida. Ex. Array, String, NodeList

const frutas = ['Banana', 'Morango', 'Uva']
const frase = 'Isso é Javascript'

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers))


// for of
for(const fruta of frutas) {
    console.log(fruta)
}

for(const char of frase) {
    console.log(char)
}


// Iterando em Objeto | Puxa apenas as propriedades enumeradas
const carro = {
    marca: 'Fiat',
    ano: 2018,
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: false // não é iterada pelo for in
    }
})

for(const key in carro) {
    console.log(key)
    console.log(carro[key])
}




// Do/While | Outro tipo de loop, não muito utilizado
let i = 0;
do {
    console.log(i++)
} while (i <= 5)