// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = Array.from(document.querySelectorAll('.curso'))

const objetoCursos = cursos.map((item) => {
    return {
        titulo: item.querySelector('h1').innerText,
        descricao: item.querySelector('p').innerText,
        aulas: +item.querySelector('.aulas').innerText,
        horas: +item.querySelector('.horas').innerText
    }
})
// Retornar o curso com mais de 20 horas
const cursosHora = objetoCursos.filter(curso => curso.horas > 20)
console.log(cursosHora)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(numero => numero > 100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some(instrumento => instrumento === 'Baixo')
console.log(temBaixo)


// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]

const totalCompras = compras.reduce((acc, compra) => {
    const precoLimpo = +compra.preco.replace('r$ ', '').replace(',', '.');
    return acc + precoLimpo 
}, 0)

console.log(totalCompras)