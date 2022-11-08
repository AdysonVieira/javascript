// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = Array.from(document.querySelectorAll('p'));
const totalCaractere = paragrafos.reduce((acc, paragrafo) => {
    return acc + paragrafo.innerText.replace(' ', '').length
}, 0)

const paragraphos = document.querySelectorAll('p');
const totalCarac = Array.prototype.reduce.call(paragraphos, (acc, paragrafo) => {
    return acc + paragrafo.innerText.replace(' ', '').length
}, 0)

console.log(totalCarac)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novoElemento(tag, classe, conteudo) {
    let elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento
}
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Elemento = novoElemento.bind(null, 'h1', 'titulo');
console.log(h1Elemento('retornando'))

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
    console.log('Isolada')
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active((function() {
    console.log('ativou')
}))







function $$(selectedElement) {
    const elements = document.querySelectorAll(selectedElement)

    function hide() {
        elements.forEach( element => {
            element.style.display = 'none'
        })
        return $$(selectedElement)
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial'
        })
        return $$(selectedElement)
    }
    
    function on(onEvent, callback) {
        elements.forEach( element => {
            element.addEventListener(onEvent, callback)
        })
        return $$(selectedElement)
    }

    return {
        hide,
        show,
        on,
    }
}

$$('li').on('click', (e) => {
    e.target.classList.toggle('active')
})