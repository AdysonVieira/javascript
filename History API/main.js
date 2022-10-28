// Objetivo | Ao invés de navegar até a página sempre gerando um novo carregamento, eu faço um fetch e trago o conteúdo da página para que eu desejo ir, assim eu não gero novo carregamento


// evento de click nos links
document.querySelectorAll('a').forEach( a => {
    a.addEventListener('click', handleClick)
})

// função que chama o fetch passando o href do link clicado
function handleClick(event) {
    event.preventDefault()
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

// função assíncrona que faz o fetch da página com o href do link clicado, pega a response e transforma em text
async function fetchPage(url) {
    document.querySelector('.content').innerText = 'Carregando...' // mensagem de espera enquanto o fetch é feito
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text()

    replaceContent(pageText); // call para função que substitui o conteúdo
}

// função que recebe o conteúdo, cria um elemento novo e substitui o conteudo da página pelo novo conteudo buscado no fetch da função fetchPage acima.
function replaceContent(content) {
    const newHTML = document.createElement('div');
    newHTML.innerHTML = content;
    
    const newContent = newHTML.querySelector('.content');
    const oldContent = document.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    
    document.title = newHTML.querySelector('title').innerText
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})