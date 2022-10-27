// Uma requisção HTTP éfeita através deema URL. O método padrão é GET, mas existem outros como POST, UPDATE, DELETE e HEADER

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"title": "Usando o POST", "aula": "JavaScript"}'
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))



// method

// GET | Usado para puxar informações. Ex. Buscar uma postagem, um usuário


// POST | Usado para enviar informações. Ex. Enviar uma postagem, uma pesquisa
const optionsPOST = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"title": "Usando o POST", "aula": "JavaScript"}'
}

// PUT | Geralmente usado para atualizar informações
const optionsPUT = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '{"title": "Usando o POST", "aula": "JavaScript"}'
}

// DELETE | Deleta uma informação

// HEAD | Puxa apenas os headers
const optionsHEAD = {
    method: 'HEAD'
}

fetch(url, optionsHEAD)
.then(response => {
    response.headers.get('Content-Type') // "application/json; charset=utf-8"
})




// Headers | troce de informações do servidor com o browser

// Cache-Control | Tempo que o qrquivo deve ficar em cache em segundos. Ex. public, max-age=3600

// Content-Type | Tipo de conteúdo. Ex. text/html; charset=utf-8. Indica o pito de arquivo, principalmente em métodos POST e PUT

// Lista de Headers | https://developer.mozilla.org/es-US/docs/Web/HTTP/Headers


// CORS | Cross-Origin Resource Sharing gerencia como deve ser feito o compartilhamento de recursos entre diferentes origens