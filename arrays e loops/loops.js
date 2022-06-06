// For Loop | Faz algo repetidamente até que uma condição seja atingida
for (let numero = 0; numero > 10; numero++) {
    console.log(numero); // Retorna de 0 a 9 no console
}

// While Loop
let i = 0;
while(1 < 10) {
    console.log(i);
    i++;
}

let videoGames = ['Xbox', 'PS5', 'Swicth', 'Mega Drive'];

for(let item = 0; item <= videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS5') {
        break;
    }
}

// ForEach 
const frutas = ['Banana', 'Maça', 'Uva', 'Abacaxi']

frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array);
})


