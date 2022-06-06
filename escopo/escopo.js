// Escopo de Função

function mostrarCarro() {
    const carro = 'Fusca'
    console.log(carro)
}

mostrarCarro(); // Fusca
console.log(carro); // Erro, variável não definida

// Erro ao declarar variáveis | Escopo Global
carro = 'Pajero' // Variável declarada sem var, let ou const se torna uma variavel global, podendo ser acessada por qualquer pessoa. Perigoso.

'use strict' // torna o uso do JavaScript restrito, protegendo os erros ao declarar uma variável

// Escopo de Bloco | todo o código contido dentro das {}
if (true) {
    let mes = 'setembro'
    const dia = 'segunda' // as variável declaradas com let e const dentro do escopo de bloco não ficam acessíveis fora delas
}

console.log(mes)
