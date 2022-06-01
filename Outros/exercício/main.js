// Galeria

const galeria = document.querySelectorAll('main .galeria img');

function trocarImagem(event) {
    const galeriaContainer = document.querySelector('.galeria');
    const imagemAlvo = event.currentTarget;
    galeriaContainer.prepend(imagemAlvo);
}

function addEvento(imagem) {
    imagem.addEventListener('click', trocarImagem);
}

galeria.forEach(addEvento);