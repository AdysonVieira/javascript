// // Fetch API | Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o .then para interagirmos com a resposta, que é um objeto do tipo Response

// fetch('./doc.txt') // Requisição com o fetch, retorna uma Promise
// .then(response => { // Usa o then para obter o resultado dessa Promise (Response)
//     return response.text() // é retornado o texto desse arquivo com o método de Response .text()
//     .then(r => { // a response agora é o texto dentro do arquivo .txt
//         document.body.innerText = r
//     })
// })

// fetch('./doc.txt') // requisição
// .then(r => r.text()) // resultado.text()
// .then(r => document.body.innerText = r) // retorno do primeiro resultado



// // Response.json() | JSON (JavaScript Object Notation) é um tipo de formato de dados muito utilizado pelo JavaScript, possui basicamente a mesma sintaxe que a do Object JS. .json() é um protótipo de Response que transforma o corpo em json em um objeto JavaScript.

// fetch('https://viacep.com.br/ws/'+ 57442000 +'/json/')
// .then(r => r.json())
// .then(cep => {
//     console.log(cep, cep.cep, cep.localidade)
// })



// // Response.text() | Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais
// const div = document.createElement('div');

// fetch('./sobre.html')
// .then( response => response.text() )
// .then( pagSobre => {
//     div.innerHTML = pagSobre
//     const h1Sobre = div.querySelector('h1').innerText
//     const h1 = document.querySelector('h1')
//     h1.innerText = h1Sobre
// })



// // Response.blob() | É um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformamos requisições de imagens, por exemplo. O blob gera um URL único.
// const $div = document.createElement('div');

// fetch('./imagem.png')
// .then(response => response.blob())
// .then(imgBlob => {
//     const blobURL = URL.createObjectURL(imgBlob)
//     const img = document.querySelector('img')
//     img.src = blobURL
//     img.width = 200
// })




// // Response.clone() | Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
// const $$div = document.createElement('div')

// fetch('https://viacep.com.br/ws/'+ 57442000 +'/json/')
// .then(response => {
//     const cloneResponse = response.clone();
//     response.json().then(json => {
//         console.log(json)
//     });
//     cloneResponse.text().then(text => {
//         console.log(text)
//     });
// })





// .headers | São o cabeçalho da requisição. São dados iteráveis, portanto podemos usar o forEach para ver todos eles

fetch('https://viacep.com.br/ws/'+ 57442000 +'/json/')
.then(response => {
    response.headers.forEach(console.log)
})





// .status e .ok | Retorna o status da requisição, se foi 404, 200, 202. Ok retorna um booleano onde true indica uma requisição bem sucedida e false para uma requisição mau sucedida.
fetch('https://viacep.com.br/ws/57442000/json/')
.then(response => {
    console.log(response.status, response.ok);
    if(response.status === 404) {
        console.log('Página não encontrada')
    } else if(response.status === 200) {
        console.log('Tudo normal por aqui')
    }
})






// .url e .type | retorna a URL da requisição e o tipo (basic, cors, error, opaque)
fetch('./doc.txt')
.then(response => {
    console.log(response.url); // http://127.0.0.1:5500/Ass%C3%ADncrono/fetch/doc.txt
    console.log(response.type); // basic | tipo de requisição no próprio servidor
})

fetch('https://viacep.com.br/ws/57442000/json/')
.then(response => {
    console.log(response.url); // https://viacep.com.br/ws/57442000/json/
    console.log(response.type); // cors | tipo de requisição para outro servidor que é permitida
})

fetch('https://www.google.com.br')
.then(response => {
    console.log(response.status) // erro
    console.log(response.type) // no-cors
})

// bacis | tipo de requisição no próprio servidor
// cors | tipo de requisição para outro servidor que é permitida
// error | erro de conexão
// opaque | no-cors, não permite acesso de outros sites

