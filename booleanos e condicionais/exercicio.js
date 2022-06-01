// Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior, 'É igual
const pessoa1 = 'Adyson';
const pessoa2 = 'Eduarda';
const idadePessoa1 = '20'
const idadePessoa2 = '21'

if(idadePessoa1 > idadePessoa2) {
console.log(`A idade de ${pessoa1} é maior que a de ${pessoa2}, a diferença de idade é de ${+idadePessoa1 - +idadePessoa2} anos`);
} else if(idadePessoa1 === idadePessoa2) {
    console.log(`${pessoa1} tem a mesma idade de ${pessoa2}`)
} else {
    console.log(`A idade de ${pessoa1} é menor que a de ${pessoa2}, a diferença de idade é de ${(+idadePessoa1 - +idadePessoa2)} anos`);
}

// Qual valor é retornado na seguinte expressã0?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 último verdadeiro
console.log(expressao)

// Verifique se as seguintes bariáveis são Truthy or Falsy
const nome = 'Adyson'; // true
const idade = 30; // true
const possuiDoutorado = false; // false
let empregoFuturo; // false
const dinheiroNaConta = 0; // false

// Compare o total de habitantes do Brasil com a China (valor em milhões)
const brasil = 207;
const china = 1340;

if(brasil > china) {
    console.log('Brasil é maior que a China')
} else {
    console.log('China é maior que o Brasil')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
}   else {
    console.log('Falso') // correta
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão') // Cão
}   else {
    console.log('Falso')
}