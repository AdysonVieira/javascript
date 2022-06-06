// Some 500 ao valor de scroll abaixo atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;

//Atribua true para a variável darCredito, caso o cliente possua carro e casa, e false caso contrário

const possuiCarro = true;
const possuiCasa = true;
const darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito' : 'Negar crédito';
console.log(darCredito)