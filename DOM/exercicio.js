// Retorne o url da página atual utilizando o objeto window
const urlAtual = document.location.href
console.log(urlAtual);

// Selecione o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector('.ativo')
console.log(elementoAtivo)

// Retorne a linguagem do navegador, se a linguagem for Inglês mude o texto do h1 para inglês
const linguagem = window.navigator.language;
console.log(linguagem)

if (linguagem === 'EN' || linguagem === 'en') {
    elementoAtivo.innerHTML = 'Document Object Model'
}


// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura)