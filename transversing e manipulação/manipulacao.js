// Manipulação
const animais = document.querySelector('.animais');
const tituloAnimais = animais.querySelector('.titulo');


const contato2 = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo');

tituloAnimais.append(tituloContato)
tituloAnimais.appendChild(tituloContato)

// Manipulando elementos

const galeria = document.querySelector('.animais-galeria')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(galeria); // move a galeria para o final de contato
contato.insertBefore(galeria, titulo); // insere a galeria antes de titulo | titulo é filho de contato
contato.removeChild(titulo); // remove titutlo de contato
contato.replaceChild(galeria, titulo); // substitui titulo por galeria
