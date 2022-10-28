// history | É possível acessar o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diversos métodos e propriedades

window.history



// history.pushState(obj, title, url) | podemos modificar o histórico e adicionar um novo item.

// window.history.pushState(null, null, 'teste.html');



// popstate | é um evento que pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.

window.addEventListener('popstate', () => {
    console.log('teste')
})



// Fetch e history | Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas sem a necessidade de recarregamento da mesma.

async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    window.history.pushState(null, null, url)
}