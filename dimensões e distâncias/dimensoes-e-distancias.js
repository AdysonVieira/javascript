// Height e Width | Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são read only
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

section.clientWidth; // width + padding
section.offsetWidth; // width + padding + border
section.scrollWidth; // width total, mesmo dentro de scroll



// Top e Left
section.offsetTop; // distância entre o topo do elemento e o topo da página

section.offsetLeft; // distância entre o o canto esquerdo do elemento e o canto esquerdo da página

// getBoundingClientRect | método que retorna um objeto com valores de width, height, distâncias di ekenebti e mais.
const rect = section.getBoundingClientRect();

rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topp do elemento e o scroll



// Window
window.innerWidth; // retorna a largura interna da janela do navegador
window.innerHeight; // retorna a altura interna da janela do navegador

window.outerWidth; // retorna a largura total, caso o console esteja aberto
window.outerHeight; // retorna a altura total, caso o console esteja aberto

window.pageXOffset; // retorna quanto a página se moveu com scroll no eixo X
window.pageYOffset; // retorna quanto a página se moveu com scroll no eixo Y



// matchMedia | Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('max-width: 600px'); // retorna true ou false
if (small.matches) { // matches é uma propriedade de matchMedia com o valor true ou false
    console.log('Tela menor que 600px')
} else {
    console.log('Tela amior que 600px')
}