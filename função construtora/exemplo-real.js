function Dom(elements) {
    this.elements = () => {
        return document.querySelectorAll(elements)
    }
    this.addClass = (classe) => {
        this.elements().forEach(element => {
            element.classList.add(classe)
        });
    }
    this.removeClass = (classe) => {
        this.elements().forEach(element => {
            element.classList.contains(classe) ? element.classList.remove(classe) : alert('a classe não existe')
        });
    }
}

const li = new Dom('li');
li.addClass('ativo')
