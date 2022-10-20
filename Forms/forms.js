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
    console.log(event.target.value);
    texto.innerText = event.target.value;
}

contato.addEventListener('keyup', handleKeyUp); // pega apenas valores digitados, se for inseridos por comando de voz não funciona
contato.addEventListener('change', handleKeyUp); // funciona com comando de voz



// Validação | o método checkValidity verifica se o campo com o atributo required é válido ou não. A Propriedade validationMessage possui a mensagem de erro padrão do browser, mas pode ser modificada com setCustomValidity;

contato.addEventListener('change', handleChange); 

function handleChange(event) {
    const target = event.target;
    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling = document.createElement('span').innerText(target.validationMessage)
    }
}