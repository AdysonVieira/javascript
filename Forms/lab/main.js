// selecionando o formulário e adicionando evento de mudança
document.getElementById('controles').addEventListener('change', handleChange);

// selecionando o seletor com classe css e o btn
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');

// criando objeto com métodos que aplicam o o estilo ao element btn
const handleStyle = {
    element: btn,
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value +'px';
    },
    width(value) {
        this.element.style.width = value +'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value +'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
        console.log(value)
    },
    fontSize(value) {
        this.element.style.fontSize = value +'px'
    }
}

function handleChange(event) {
    handleStyle[event.target.name](event.target.value)
}

