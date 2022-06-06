// Crie uma array com os anos que o Brasil ganhou a copa
let brasilGanhouCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop para mostrar no console a seguinte mensagem, `O Brasil ganhou a copa de ${ano}`
for (let item = 0; item < brasilGanhouCopa.length; item++) {
    console.log(`O Brasil ganhou a copa de ${brasilGanhouCopa[item]}`)
}

let ano = 0;
while (ano < brasilGanhouCopa.length) {
    console.log(`O Brasil ganhou a copa de ${brasilGanhouCopa[ano]}`);
    ano++;
}

brasilGanhouCopa.forEach(item => {
    console.log(`O Brasil ganhou a copa de ${item}`)
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
const frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância']

for (let item = 0; item < frutas.length; item++) {
    console.log(frutas[item]);
    if (frutas[item] === 'Pera') {
        break;
    }
}

let item = 0;
while (item < frutas.length) {
    console.log(frutas[item]);
    item++;
    if (frutas[item] === 'Pera') {
        break
    }
}

// Coloque a última fruta da array acima em uma variável sem remover a mesma da array

const ultimaFruta = frutas[frutas.length - 1]

console.log(ultimaFruta, frutas)