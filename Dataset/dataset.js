// Dataset | É uma propriedade do HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção chave/valor com os atributos do Elemento HTML começados com data-

// Selecionando
const paragrafo = document.querySelector('p'); // seleciona o elemento p
const paragrafo2 = document.querySelector('[data-font-size]'); // seleciona o elemento com o atributo data-font-size
const paragrafo3 = document.querySelector('[data-font-size="36"]'); // seleciona o elemento com o atributo data-font-size com o valor 18

paragrafo.dataset.tempo = 'rápido' // atribuindo ao elemento um novo atributo data-tempo
paragrafo.dataset.cor = 'vermelho' // modificando o valor do atributo data-cor

delete paragrafo.dataset.tempo // deleta o atributo tempo do elemento


const paragrafos = document.querySelectorAll('[data-cor]')
paragrafos.forEach(paragrafo => {
    paragrafo.classList.add(paragrafo.dataset.cor)
}) // adiciona o valor da propriedade cor na classe do elemento paragrafo

// Data vs Class | A vantagem de se utilizar data atributes é que se torna mais fácil evitar conflitos com estilos no CSS além de deixar a estrutura da tag mais organizada

// Nomenclatura
// data-anima-scroll no JS vira animaScroll
// div.dataset.animaScroll
// div.dataset.tempoTotal = '1000' | data-tempo-total="1000"