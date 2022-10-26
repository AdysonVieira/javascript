// // JSON | Javascript Object Notation é um formato de organização dados compostos por chave e valor. As aspas duplas são obrigatórias tanto na chave quanto no valor quando esse for string

// {
//     "id": 1,
//     "nome": "Adyson",
//     "email": "contato.adyson@gmail.com",
//     "bonito": true,
//     "talento": [
//         "tocar",
//         "jogar"
//     ],
//     "endereco": {
//         "cidade": "Olho d'Água das Flores",
//         "estado": "Alagoas"
//     }
// }


// // é comum vermos uma array com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array
// [
//     {
//         "id": 1,
//         "aula": "Javascript",
//         "minutos": 50
//     },
//     {
//         "id": 2,
//         "aula": "HTML",
//         "minutos": 10
//     },
//     {
//         "id": 3,
//         "aula": "CSS",
//         "minutos": 20
//     }
// ]


fetch('./dados.json')
.then( response => response.json() )
.then( response => {
    response.forEach(r => {
        console.log(r.aula)
    })
})


// JSON.parse() e JSON.stringfy() | o primeiro irá transformar um textoJSON em um objeto Javascript, o segundo irá transformar um objeto Javascript em uma string no formato JSON

const textoJSON = '{"id": 1, "titulo": "Javascript", "duracao": 30}'
const textoOBJ = JSON.parse(textoJSON) // transformou a string JSON em Objeto
console.log(textoOBJ)

console.log(JSON.stringify(textoOBJ)) // transformou o objeto em string JSON



// Tempo real | podemos utilizar o o JSON.parse() e .stringfy() para armazenar um objeto em apenas uma chave no localStorage

const configuracao = {
    player: 'Youtube',
    duracao: 25,
    titulo: "Javascript"
}

localStorage.config = JSON.stringify(configuracao); // armazena no localStorage uma string JSON do objeto configuracao

const preferencia = JSON.parse(localStorage.config); // transforma a string JSON em objeto novamente

console.log(preferencia) // mostra o objeto