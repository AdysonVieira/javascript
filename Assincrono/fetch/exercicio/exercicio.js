// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado

const formulario = document.getElementById('formulario');
// evento de mudança para guardar no objeto endereco os valores dos inputs
formulario.addEventListener('change', handleEndereco);

// evento para enviar requisição quando o campo CEP mudar
document.getElementById('cep').addEventListener('change', buscarCEP); 

// evento para mostrar o objeto endereço (posteriormente envia-lo)
document.getElementById('buscar').addEventListener('click', mostrar)

// objeto vazio para armazenar os dados do formulário
const endereco = {}

// Callback para após a mudança no campo, name e value serão armazenados no objeto endereco
function handleEndereco(event) {
    endereco[event.target.name] = event.target.value
}

// Callback para enviar a requisição a API quando o campo CEP é modificado
function buscarCEP(event) {
    endereco[event.target.name] = event.target.value
    fetch(`https://viacep.com.br/ws/${event.target.value}/json/`)
    .then(response => response.json())
    .then(response => {
        endereco.cep = response.cep
        endereco.logradouro = response.logradouro
        endereco.bairro = response.bairro
        endereco.localidade = response.localidade
        endereco.uf = response.uf

        formulario.elements.cep.value = response.cep
        formulario.elements.logradouro.value = response.logradouro
        formulario.elements.bairro.value = response.bairro
        formulario.elements.localidade.value = response.localidade
        formulario.elements.uf.value = response.uf
    });
}

function mostrar(event) {
    event.preventDefault();
    console.log(endereco)
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
