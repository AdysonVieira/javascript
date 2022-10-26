// new Promise() | Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida com a execução do primeiro argumento ou rejeitada se o segundo argumento for ativado

const $promessa = new Promise((resolve, rejeita) => {
    let condicao = true;
    if (condicao) {
        resolve()
    } else {
        rejeita()
    }
})

console.log(promessa); // Promise {<resolved>: undefined}



// .then() | O poder das Promises estão no método then() do seu protótipo. O callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve

const promessa = new Promise((resolve, rejeita) => {
    let condicao = false;
    if (condicao) {
        setTimeout(() => {
            resolve({nome:'Adyson', idade: 32})
        }, 1000)
    } else {
        rejeita(console.log('errooooou'))
    }
})

// depois de resolvida, então execute a função que tem como o resultado o que for retornado de resolve() e pode ser sequenciada com outros then, desde que cada um retorne algo
promessa
.then((resolucao) => { 
    resolucao.sobrenome = 'Vieira';
    resolucao.endereco = 'Cônego José Bulhões';
    return resolucao
})
.then((resolucao) => {
    resolucao.endereco = 926
    console.log(resolucao)
    return resolucao
}) // { nome: 'Adyson', idade: 32, sobrenome: 'Vieira', age: 20 }




// .catch() | diferente do .then(), o catch é usando quando a promessa é rejeitada

.catch((rejeitada) => {
    console.log('ERROOOO')
})



// .then(resolve, rejeita) | o then pode receber como segundo argumento o rejeita, assim não precisa do .catch()

.then(resolucao => {
    console.log('Resolvido')
}, rejeitada => {
    return 'Rejeitado'
})



// .finally() | Executa a função anônima sempre que a promise acabar independente do resulta, resolvido ou rejeitado.

.finally(() => console.log('acabou a promise'))




// Promise.all() | Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é um array com as respostas de cada promise

const login = new Promise( resolve => {
    setTimeout(() => {
        resolve('Login Efetuado');
    }, 1000)
})

const dados = new Promise( resolve => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500)
})

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
    console.log(respostas) // array com todas as respostas
})




// Promise.race() | Retornará a primeira promise resolvida.

const $login = new Promise( resolve => {
    setTimeout(() => {
        resolve('Login Efetuado');
    }, 1000)
})

const $dados = new Promise( resolve => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500)
})

const $tudoCarregado = Promise.race([login, dados]);

$tudoCarregado.then(resposta => {
    console.log(resposta) // Login Efetuado
})