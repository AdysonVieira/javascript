// Função
function areaQuadrado(lado) {
    return lado * lado;
}

// Parametros e Argumentos
function imc(peso, altura) { // Parametros
    return peso / (altura ** 2)
}

console.log(imc(110, 1.85)) // Argumentos

// Função com Condicionais
function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto de azul'
    }   else if(cor === 'rosa') {
        return 'Eu gsto de rosa'
    }   else {
        return 'Eu não gosto de cores'
    }
}

console.log(corFavorita('preto'));

// Argumentos podem ser funções | Callback

// addEventListener('click', function() {
//     console.log('Passou');
// });

// Return | Se a função sem o retorno retorna undefined
function imc2(peso, altura) { // Parametros
    const imc2 = peso / (altura ** 2)
    console.log(imc2)
}

imc2(110, 1.85) // Executa todo o código da função e retorna o valor e undefined

console.log(typeof imc2(110, 1.85)) // undefined

// Hierarquia e Escopo
function faltaVisitar(paisesVisitados) {
    const totalPaises = 193; // Variável definida dentro a função
    return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(faltaVisitar(10))
//console.log(totalPaises) // A variável definida dentro do escopo não função não pode ser chamada fora do escopo

// Escopo Léxico | Uma função consegue acessar uma variável definina pelo pai
const profissao = 'Designer';

function dados() {
    const nome = 'Adyson';
    const idade = 30;
    function outrosDados() {
        const endereco = 'Na Rua';
        const idade = 31
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados()) // A função acessou todas as variáveis seguindo as hieraquias

//console.log(telefone) // Dentro do escopo Global não é possível acessar variáveis definidas dentro da função
