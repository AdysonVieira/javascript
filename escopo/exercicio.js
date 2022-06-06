// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
// console.log(cor, marca, portas);
// Resposta | Erro e Syntax em tentar imprimir o var
// Resposta | As variáveis marca e portas foram declaradas dentro de um bloco e não estão acessíveis fora dele

// Como corrigir o erro abaixo?
// function somarDois(x) {
//     const dois = 2;
//     return x + dois;
// }
// function dividirDois(x) {
//     return x / dois;
// }

const dois = 2; // Mudando o escopo da variável declaranda dentro da função para fora

function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(4));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) { // trocar o var por let
    console.log(numero);
}

const total = 10 * numero;
console.log(total)
