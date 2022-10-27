// async / await | A palavra chave async indica que a função possui partes assícronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8 

async function getData() {
    // com await
    const dataAwait = await fetch('./dados.json'); // Response {type: 'basic'...
    const dataAwaitJSON = await dataAwait.json() // retorna o objeto Javascript
    console.log(dataAwaitJSON[0].aula) // Javascript
    
    // sem await
    const data = fetch('./dados.json'); // Promise {<pending>}    

}
getData()




// then / await | a diferença é a apenas a sintax mais limpa

function dataThen() {
    fetch('./dados.json')
    .then(response => response.json())
    .then(response => {
        document.body.innerText = response[0].aula
    })
}

async function dataAwait() {
    const responseAwait = await fetch('./dados.json');
    const jsonAwait = await responseAwait.json();
    document.body.innerText = jsonAwait[0].aula;
}




// try \ catch 
async function dataAwait() {
    try {
        const dataAwait = await fetch('./dadoss.json');
        const dataAwaitJSON = await dataAwait.json();
        document.body.innerText = dataAwaitJSON[0].aula
    }
    catch(erro) {
        console.log(erro)
    }
}




// iniciar fetch ao mesmo tempo | Não precisamos esperar um fetch para iniciarmos outro, porém precisamos esperar a resposta dele para transforma-lo em JSON, por exemplo

async function iniciarAsync() {
    const promiseDados = await fetch('./dados.json');
    const promiseClientes = fetch('./clientes.json')

    const responseFinalDados = await promiseDados.json()
    const responseFinalClientes = await (await promiseClientes).json()

    console.log(responseFinalClientes)
    console.log(responseFinalDados)
}

iniciarAsync()