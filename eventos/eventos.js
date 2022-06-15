// addEveventListener | adiciona uma função ao elemento chamada de callback, que será ativada assim que o evento ocorrer nesse elemento
const img = document.querySelector('img');

img.addEventListener('click', () => {
    console.log('clicou na imagem');
})

// Callback | é uma boa prática declarar a função fora do addEventListener
function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)


// Propriedades do Event
const animaisLista = document.querySelector('.animais-galeria');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // elemento alvo
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path; // caminho do elemento
}

animaisLista.addEventListener('click', executarCallback);


// event.preventDefault() | Método que previne o comportamento padrão
function executarCallback(event) {
    event.preventDefault()
    const currentTarget = event.currentTarget;
}

animaisLista.addEventListener('click', executarCallback);


// This | em eventos o this representa o elemento

function mostrarThis(event) {
    console.log(this) // animaisLista
    console.log(this.hasAttribute('alt'))
}

animaisLista.addEventListener('click', mostrarThis);



// Diferentes Eventos

const h1 = document.querySelector('h1');

function callback(event) {
    console.log(event.type, event)
}


h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('mousemove', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


// Keyboard | adicionando atalhos através dos eventos de keydown
function callback(event) {
    if (event.key === 'a') {
        console.log('apertou a tecla A');
    }
}

window.addEventListener('keydown', callback);


// forEach e Eventos | 

const imagens = document.querySelector('img');

function handleImagem(event) {
    console.log(event.target.getAttribute('src'));
}

imagens.forEach((img) => {
    img.addEventListener('click', handleImagem );
})