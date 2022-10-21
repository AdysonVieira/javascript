// selecionando o formulário e adicionando evento de mudança
const controles = document.getElementById('controles');
controles.addEventListener('change', handleChange);

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

// função que acessa o objeto com os métodos com chaves e valores capturados do target
function handleChange(event) {
    handleStyle[event.target.name](event.target.value); // executa na tela
    saveValues(event.target.name, event.target.value); // salva no localStorage
    showCSS();
}

// coloca dentro do elemento css os estilos do botão com a propriedade .cssText
function showCSS() {
    css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

// função para salvar os valores no localStorage
function saveValues(key, value) {
    localStorage[key] = value;
}

function setValues() {
    const keys = Object.keys(localStorage) // chaves salvas no localStorage
    // para cada chave salva no localStorage
    keys.forEach(name => {
        handleStyle[name](localStorage[name].value) // seto no objeto handleStyle 
        controles.elements[name].value = localStorage[name] // seto no value do input form os valores de localStorage
    })
    showCSS()
}
setValues();

