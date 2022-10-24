// new Promise() | Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida com a execução do primeiro argumento ou rejeitada se o segundo argumento for ativado

const promessa = new Promise((resolve, rejeita) => {
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
    let condicao = true;
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