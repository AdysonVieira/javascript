// Object.create(obj, definePropriedades) | similar a função construtora, só que passa diretamente um objeto

const carro = {
    fabricante(marca) {
        this.marca = marca
        return this // retorna o objeto carro
    },
    ano: 2001,
    acelerar() {
        return this.marca + ' acelerou'
    },
    buzinar() {
        return this.marca + ' buzinou é 22'
    }
}

const honda = Object.create(carro) // retorna um objeto vazio com todas as propriedades e métodos de carro dentro do protótipo de honda
honda.marca = 'Civic' // é criado uma nova propriedade dentro do Objeto e a propriedade marca: 'Marca' fica disponível dentro do protótipo
console.log(honda.acelerar())  // Civic acelerou

const ferrari = Object.create(carro).fabricante('Ferrari') // lembrar de retornar o objeto, e não só a marca

ferrari.estacionar = function(local) {
    return this.marca + ' estacionou na ' + local
}

console.log(ferrari.estacionar('praia'))


// Object.assign(alvo, obj1, obj2) // modifica o alvo

const funcaoAutomovel = {
    acelerar() {
        return 'acelecou'
    },
    buzinar() {
        return 'buzinou'
    }
}

const carros = {
    mala: true,
    rodas: 4
}

const motos = {
    capacete: true,
    rodas: 2
}

Object.assign(motos , funcaoAutomovel, carro) // retorna o objeto motos com o os métodos e propriedades de funcaoAutomovel e carro

console.log(motos.fabricante('Honda').buzinar())

