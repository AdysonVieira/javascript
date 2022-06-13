// Attributes
const img = document.querySelector('.img'); 

img.attributes; // retorna a lista de atributos
img.attributes[0]; // retorna o primeiro atributo da lista
img.attributes['data-text']; // retorna um atributo data-text

// getAttribute e setAttribute | Método que retorna ou define um atributo para o elemento selecionado

img.getAttribute('src'); // retorna o valor de src
img.setAttribute('alt', 'Texto Alternativo'); // define o valor de alt
img.hasAttribute('id'); // verifica se contém o atributo 'id' e retorna true ou false
img.removeAttribute('alt'); // remove o atributo 'alt'

img.hasAttribute(); // verifica se o elemento possui atributos