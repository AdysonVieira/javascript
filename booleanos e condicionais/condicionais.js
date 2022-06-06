const possuiGraduacao = true;
const possuiMestrado = false;
const curso = 'Sistemas de Informação'

// Condicionais if e else
if(possuiGraduacao) {
    console.log(`O aluno é formado em ${curso}`)
}   else {
    console.log('O aluno não possui graduação')
}

// Condicional else if
if(possuiMestrado) {
    console.log(`O aluno é mestre em ${curso}`)
} else if(possuiGraduacao) {
    console.log(`O aluno é graduado em ${curso}`)
} else {
    console.log('O aluno não possui graduação')
}

// If abreviado
if(possuiMestrado) console.log(`O aluno é mestre em ${curso}`)
else if(possuiGraduacao) console.log(`O aluno é graduado em ${curso}`)
else console.log('O aluno não possui graduação')

// Operador lógico de negação "!"
if(!possuiGraduacao) {
    console.log('O aluno não possui graduação')
} else if(!possuiMestrado) {
    console.log('O aluno não possui Mestrado')
}

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
10 == 10; // true
10 === 10; // true
'10' == 10; // true
'10' === 10; // false
'Gato' == 'gato'; // false
'Gato' === 'Gato' // true
'Gato' !== 'gato'; // true
'Gato' !== 'Gato'; // false

// Operadores Lógicos && | equivalente a 'e' ou 'and'
true && true; // true
true && false; // false
false && true; // false
0 && 1; // 0
(5 - 5) && (5 + 5); // 0
(5 >= 5) && (5 < 10); // true
'Gato' && false; // false

// Operadores Lógicos || | equivalente a 'ou' ou 'or'
true || true; // true
true || false; // true
false || true; // true
0 || 1; // 1
(5 - 5) || (5 + 5); // 10
(5 >= 5) || (5 < 10); // true
'Gato' && false; // Gato

// Switch | verifica se uma variável é igual à diferentes valores utilizando o case.
let corFavorita = 'Vermelho';

switch (corFavorita) {
    case 'Azul':
        console.log('A cor é azul');
        break;
    case 'Vermelho':
        console.log('A cor é vermelho');
        break;
    case 'Amarelo':
        console.log('A cor é amarelo');
        break;
    default:
        console.log('Não sei a cor')
}
