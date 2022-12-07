export default class ValidaCPF {
    constructor(element) {
        this.element = element
    }
    
    limpar(cpf) {
        return cpf.replace(/\D/g, '')
    }

    formatar(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    validar(cpf) {
        const cpfLimpo = this.limpar(cpf)
        if(cpfLimpo.length === 11) {
            this.element.classList.add('valido')
            this.element.classList.remove('invalido')
            return this.formatar(cpfLimpo)
        } else {
            this.element.classList.add('invalido')
            this.element.classList.remove('valido')
            return console.log('cpf inválido')
        }
        // return cpfLimpo.length === 11
        // ? console.log(this.formatar(cpfLimpo))
        // : console.log('CPF inválido')
    }

    adicionarEvento() {
        this.element.addEventListener('change', (event) => {
            const campo = this.validar(event.target.value)
            campo ? event.target.value = campo : event.target.value
        })
    }
}
