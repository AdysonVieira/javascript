// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = Array.from(document.querySelectorAll('p'));
const totalCaractere = paragrafos.reduce.call(paragrafos,(acc, paragrafo) => {
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

function newElement(tag, classe, conteudo) {
    return `<${tag} class="${classe}">${conteudo}</${tag}>` 
}

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