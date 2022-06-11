const videoGames = ['PS5', 'XBOX', '3DS', 'WII'];

// forEach e Array | forEach é um método de Array, alguns array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array

const titulos = document.getElementsByClassName('titulo'); // retorna um HTMLCollection
const tituloArray = Array.from(titulos); // transforma em Array


// forEach
videoGames.forEach(function(videoGame, index, array) { // callback
    console.log(videoGame, index, array);
});


// Arrow Function
const frutas = ['banana', 'maçã', 'uva', 'pêra']

frutas.forEach(fruta => console.log(fruta)); // quando a função tem apenas uma linha pode ser escrita sem as {}

frutas.forEach(fruta => { // com apenas um agurmento não precisa de ()
    console.log(fruta);
});

frutas.forEach((fruta, index) => { // com mais argumentos precisa dos ()
    console.log(fruta, index);
});

let i = 0;
frutas.forEach(() => { // quando manipula variáveis externas precisa dos ()
    console.log(i++);
})