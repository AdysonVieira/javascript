// Função sem parâmetros
function curso() {
    const titulo = 'JavaScript';
    const horas = 40
    return console.log('Aprenda ' + titulo + ' em ' + String(horas) + ' horas.')
}

curso()

// Função com parâmetros
function bass(marca, modelo) {
    return {
        frase: 'O baixo ' + modelo + ' da marca ' + marca + ' é muito bom! '
    }
}

const fraseBass = bass('Fender', 'JazzBass')
console.log(fraseBass.frase)

// Exercício

function livro(nome, ano, autor) {
    const anosAtras = 2022 - ano;
    return {
        nome,
        dados: nome + ' por ' + autor + ' escrito há ' + anosAtras + ' anos atrás.'
    }
}

const livroVar = livro('Senhor do Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroVar.dados)
