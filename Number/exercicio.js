// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosLista = numeros.split(', ')
const novoNumeros = []
numerosLista.forEach(numero => {
    return novoNumeros.unshift(+numero)
})
console.log(Math.max(...novoNumeros))
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let somaTotal = 0

listaPrecos.forEach(preco => {
    const precoLimpo = +preco.toLowerCase().replace('r$ ', '').replace(',','.').trim()
    console.log(precoLimpo.toFixed(2))
    return somaTotal += +precoLimpo.toFixed(2)
})

console.log(`O valor total é ${somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)