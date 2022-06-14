// Galeria

const imagens = document.querySelectorAll('main .galeria img');

function trocarImagem(event) {
    const galeriaContainer = document.querySelector('.galeria');
    const imagemAlvo = event.currentTarget;
    galeriaContainer.prepend(imagemAlvo);
}

function addEvento(imagem) {
    imagem.addEventListener('click', trocarImagem);
}

imagens.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        const galeriaContainer = document.querySelector('.galeria');
        const imgAlvo = event.currentTarget;
        galeriaContainer.prepend(imgAlvo) 
    })
});