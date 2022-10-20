// Forms

document.forms; // array com todos os formulários do documento
document.forms.contato; // retorna o form com name contato
document.forms.contato.elements; // retorna os elementos do form com name contato
document.forms.contato.elements.nome; // retorna o elemento name nome
document.forms.contato.elements[1]; // retorna o elemento do índice 1
document.forms.contato.elements[0].value; // retorna o valor do elemento do índice 0



// Values | A propriedade value retorna o valor do elemento no form, podemos adicionar eventos para captar esses valores enquanto o campo está sendo preenchido com o keyUp(ao levantar da tecla). Podemos usar o change quando o campo já foi preenchido.

const form = document.getElementById('contato');
const texto = document.querySelector('.texto')

function handleKeyUp(event) {
    texto.innerText = document.forms.contato.nome.value;
}

contato.addEventListener('keyup', handleKeyUp); // pega apenas valores digitados, se for inseridos por comando de voz não funciona
contato.addEventListener('change', handleKeyUp); // funciona com comando de voz



// Validação | o método checkValidity verifica se o campo com o atributo required é válido ou não. A Propriedade validationMessage possui a mensagem de erro padrão do browser, mas pode ser modificada com setCustomValidity;

contato.addEventListener('change', handleChange);

function handleChange(event) {
    const target = event.target;
    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
    } else {
        target.classList.remove('invalido')
        target.nextElementSibling.innerText = '';
    }
}



// Select

contato.addEventListener('change', handleSelect);

function handleSelect(event) {
    document.body.style.backgroundColor = event.target.value
}


// Pegando os dados e salvando em um objeto

contato.addEventListener('change', handleGetData) // evendo de mudança no form
const dados = {}; // declarando objeto vazio

function handleGetData(event) {
    dados[event.target.name] = event.target.value // dados[chave] : valor
}