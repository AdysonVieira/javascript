// Strings, Números, Booleanos e Objetos possuem propriedades e métodos. Por isso são objetos.

// Métodos em Strings
const nome = 'Adyson';

nome.charAt(2); // y | mostra qual caracter está na no indice
nome.replace('son', 'sinho'); // Adysinho
nome; // Adyson | Manipulam mas não alteram o valor

const novoNome = nome.replace('son', 'sinho')

console.log(novoNome);

// Métodos em Number
let numero = 10.8;

numero.toFixed(); // 11 | acima de 5 arredonda para cima, abaixo arredonda para baixo


// Métodos em Funções
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//    return lado * lado;
//}"

areaQuadrado.length; // 1 | conta a quatidade de argumentos essa função recebe
