// Variáveis var, let e const

var nome = 'Adyson';
let sobrenome = 'Vieira';
const idade = 30;

console.log(nome, sobrenome, idade);

// Declarando váriáveis em uma unica linha
let curso = 'Javascript',
    horas = 30;

console.log(curso, horas);

// Formas válidas de declarar variável
let $curso = 'PHP',
    _horas = 50,
    possuiCertificado = true;

// Redefinindo valor de variável
let time = 'Atlético de Madrid'; // let declara uma variável onde o valor pode ser mudado
console.log(time);

time = 'Corinthians'; // o valor de time foi redefinido | não pode usar o let na frente pois estaria declarando uma variável que já existe
console.log(time);


// const precisa ser declarada com valor atribuido
let timeFavorito; // variável declarada sem valor

