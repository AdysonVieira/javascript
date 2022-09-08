// Função Construtora serve para construir um novo objeto sempre que for chamada
function Carro() {
    this.marca = 'marca'; // uso do this para referenciar o objeto
    this.modelo = 'modelo';
    this.preco = 1
}

const honda = new Carro(); // usasse o new sempre para referenciar um novo objeto
honda.marca = 'Honda';
honda.modelo = 'Civic';
honda.preco = 100000

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.modelo = 'Toro';
fiat.preco = 150000

console.log(honda.marca, fiat.marca);

// Pode-se setar os parametros diretamente na propriedade
function Produto(parametro1, parametro2, parametro3) {
    this.nome = parametro1;
    this.preco = parametro2;
    this.codigo = parametro3;
}

const bravecto = new Produto('Bravecto Transdermal', 150, 205) // Passando os valores como argumento da função construtora

console.log(bravecto.preco);

bravecto.preco = 180 // atribuindo novo valor a propriedade do objeto
console.log(bravecto.preco);
console.log(bravecto);

// Pode-se criar variáveis dentro da função, onde ela podem retornar um valor para a propriedade

function CalculaProduto(produto, precoDeCompra, porcentagem) {
    // As variáveis ficam "protegidas", não sendo mostradas no objeto
    const precoInicial = precoDeCompra;
    const calculoPorcentagem = (porcentagem * precoInicial) / 100; // (20 * 86) / 100

    this.produto = produto;
    this.precoDeVenda = precoInicial + calculoPorcentagem;
    this.lucro = calculoPorcentagem;
}

const canex = new CalculaProduto('Canex Premium', 86, 20);

console.log(canex.precoDeVenda, canex.lucro);