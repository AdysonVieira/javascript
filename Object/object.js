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




// Object.defineProperties() | define as propriedades de forma imutável

const bicicletas = {}

Object.defineProperties(bicicletas, {
    rodas: {
        value: 2,
        configurable: false, // define se a propriedade pode ou não ser alterada ou deletada | rodas dentro do objeto bicicletas não pode ser alterada ou deletada
        writable: true, // a propriedade pode ser alterada mas não pode ser deletada
        enumerable: true, // permite que a propriedade seja enumerada    
    },
    pneus: {
        enumerable: true,
        get() {
            return this._pneus
        },
        set(valor) {
            this._pneus = valor + 1 + ' pneus reserva'
        }
    }
})

bicicletas.pneus = 2
console.log(bicicletas.pneus)




// Object.getOwnPropertyDescriptor(objeto) | lista todas as propriedades e métodos de um objeto e suas devidas configurações

// const bikeConfig = Object.getOwnPropertyDescriptors(bicicletas, 'rodas')
// console.log(bikeConfig.configurable)



// Object.key(objeto), Object.values(objeto) e Object.entries(objeto)

Object.keys(bicicletas) // [ 'rodas', 'pneus', '_pneus' ] | retorna as chaves do objeto
Object.values(bicicletas) // [ 2, '3 pneus reserva', '3 pneus reserva' ] | retorna os valores do objeto
Object.entries(bicicletas) // [ 'rodas', 2 ], [ 'pneus', '3 pneus reserva' ], [ '_pneus', '3 pneus reserva' ] | retorna um array com chave e valor do objeto



// Object.getOwnPropertyNames(objeto)

console.log(Object.getOwnPropertyNames(bicicletas)) // retorna uma array com todas as propriedades do objeto
Object.getOwnPropertyNames(motos.prototype)


// Object.is(valor1, valor2) | retorna true ou false se o valor passado é igual ao outro

const frutas1 = ['Uva', 'Laranja']
const frutas2 = ['Uva', 'Laranja']

const novaFrutas = frutas1

Object.is(frutas1, frutas2) // false
Object.is(frutas1, novaFrutas) // true


// Object.freeze() | Impede qualquer mudança nas propriedades
const carros = {
    mala: true,
    rodas: 4
}

Object.freeze(carros) // não permite a mudança
carros.mala = 8
Object.isFrozen(carros) // true | retorna verdadeiro ou false se o objeto está congelado


// Object.seal() | previne a adição de novas propriedades e remoção das propriedades, mas permite que as atuais sejam modificadas
const carros = {
    mala: true,
    rodas: 4
}

Object.seal(carros)
carros.mala = false // altera o valor
carros.andar = true // previnine a adição da propriedade
Object.isSealed(carros) // true


//Object.preventExtensions() | previne a adição de novas propriedades
const carros = {
    mala: true,
    rodas: 4
}

Object.preventExtensions(carros)
carros.andar = true // previnine a adição da propriedade
console.log(Object.isExtensible(carros)) // false | 