// Crie uma função para verificar se um valor é Truthy
function verificaTrue(parametro) {
    return !!parametro;
}

// Crie uma função matemática que retorne o perímetro de um quadrado. lembrando: perímetro é a soma dos quatro lados do quadrado.
function perimetroQuadrado(lado) {
    return `O perímetro é de ${lado * 4}`;
}

// Crie uma função que retorna o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

//Cire uma função que verifica se um número é par
function verificaPar(numero) {
    if(numero % 2 == 0) {
        return `O número ${numero} é par`;
    }   else {
        return `O número ${numero} é ímpar`;
    }
}

//Crie uma função que retorne o tipo de dado do argumento passado nela
function verificaTipo(parametro) {
    console.log(typeof parametro);
}

// addEventListener é uma função nativa do JavaScript. O primeiro parâmetro é o evento que ocorre e o segundo é o Callback. Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
// window.addEventListener('scroll', function() {
//     console.log('Adyson Vieira')
// })

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);