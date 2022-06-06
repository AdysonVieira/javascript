// selecionando uma tag dentro do documento e armazenando em uma variável
const titulo = document.querySelector('h1');

// Element | Toda tag HTML é reperesentada pelo objeto Element e herda suas propriedades e métodos

// Exemplos de Propriedades
titulo.innerHTML = 'Alterei o Título'; // Acessa o conteúdo entre a tag
titulo.classList[1]; // Mostra a lista de classes da tag, acessando pelo indice
titulo.offsetHeight; // Mostra a altura do elemento

// Exemplos de Métodos
titulo.addEventListener('click', callback); // Método que adiciona um evento, recebe 2 parâmetros