
// procura a
const padraoRegexp = /a/

// Regular Expression | Regexp ou Regex são expressões utilizadas para realizarmos buscas/substituições de padrões em string. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split()
const texto = 'Javascript'
const novoTexto = texto.replace(padraoRegexp, 'B')

console.log(novoTexto) // JBvascript


// literal | utilizar um caracter literal irá realizar uma busca específica deste caracter.

console.log('Javascript'.replace(/Java/, 'Type'))


// Flag:g | As flags irão modificar como a expressão é interretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

console.log('Javascript'.replace(/a/g , 'e'))


// Flag:i | com o i informamos que devem ser ignoradas as diferenças entre maiusculas e minusculas, buscando A ou a

console.log('Pense na Principal'.replace(/p/gi, 'c'))

// Flag:m | multiline: com o m informamos que devem ser buscado multilinhas

console.log(`contato.com
contato.com`.replace(/\w+$/gm, 'x'))


// Character Class | se colocarmos os caracteres entre [] estamos definindo uma classe. /[ab]/ irá procurar por a ou por b

console.log('Javascript'.replace(/[ai]/gi, 'u'))

// podemos passar caracteres especiais
console.log('Javascript, ame ou odeie.'.replace(/[ ,.]/gi, '-'))

// /./ seleciona tudo
console.log('Javascript, ame ou odeie.'.replace(/./gi, '-'))

// /[.]/gi para selecionar os .
// /\.+*&%$.[]{}()/gi para tornar caracteres especiais em literais
console.log('Javascript, ame ou odeie.'.replace(/[.]/gi, '!'))
console.log('Javascript, ame ou odeie.'.replace(/\./gi, '!'))

// limpar CPF
console.log('111.222.333-58'.replace(/[ .-]/g, ''))

// Um ou outro
console.log('Brazil é com s de Brasil'.replace(/[Bra[zs]il]/g, 'Prazer'))

// de A a Z
console.log('1238384ASKJHGAS'.replace(/[a-z]/gi, 'l'))

// de 0 a 9
console.log('1238384ASKJHGAS'.replace(/[0-9]/gi, 'n'))

// Acentos
console.log('1238384ASKJáááááHGAS'.replace(/[Á-ÿ]/gi, 'n'))

// Negar | seleciona todas as letras e nega z e s
console.log('Brazil, é com s de Brasil!'.replace(/[^a-z]/gi, 'a'))

// Word | O \w irá selecionar qualquer caractere alfanumerico e  underline. É a mesma coisa que [A-Za-z0-9_]
console.log('Guarda-chuva R$ 23,00'.replace(/\w/g, '!')) // !!!!!!-!!!!! !$ !!,!!


// Word | O \W irá negar caractere alfanumerico e  underline. É a mesma coisa que [^A-Za-z0-9_]
console.log('Guarda-chuva R$ 23,00'.replace(/\W/g, '!')) // Guarda!chuva!R!!23!00


// Number | o \d seleciona todos os dígitos
console.log('Guarda-chuva R$ 23,00'.replace(/\d/g, '!')) // Guarda-chuva R$ !!,!!


// Number | o \D nega todos os dígitos
console.log('Guarda-chuva R$ 23,00'.replace(/\D/g, '!')) // !!!!!!!!!!!!!!!!23!00

// \s | seleciona tudo que for tab, quebra de linha e espaço
console.log('Guarda-chuva R$ 23,00'.replace(/\s/g, '!')) // Guarda-chuva!R$!23,00

// \S | nega tudo que for tab, quebra de linha e espaço
console.log('Guarda-chuva R$ 23,00'.replace(/\S/g, '!')) // !!!!!!!!!!!! !! !!!!!

// Quantificador
console.log('Vaaaai'.replace(/a{2,4}/g, '!')) // V!i

// Mais +
console.log('Vaaaai'.replace(/a+/g, '!')) // V!i

// Asterisco *
console.log('Vaaaai'.replace(/Va*/g, '!')) // !i

// Opcional ?
console.log('regex ou regexp'.replace(/regexp?/g, '!')) // ! ou ! | p? é opicional

// Or |
console.log('regex ou regexp'.replace(/regex|regexp/gi, '!')) // ! ou !

// Word Boundary
console.log('propor ou proporcional'.replace(/propor/gi, '!')) // ! ou !cional
console.log('propor ou proporcional'.replace(/\bpropor\b/gi, '!')) // ! ou proporcional

// Anchor Beginning | Com o ^ é possível informar que a busca deve ser iniciada no início da linha
console.log(`contato@email.com
outroemail@email.com`.replace(/^\w+/g), 'x')

// Anchor End | Com o $ é possível informar que a busca deve ser iniciada no final da linha
console.log(`contato@email.com
outroemail@email.com`.replace(/\w+$/g), 'x')

// Unicode | busca pelo código unicode
console.log('@'.replace(/\u0040/g, 'a'))

// Substituição | usando o $& faz referencia a palava selecionada
console.log('PHP e Java são diferentes'.replace(/Java/gi, '$&script'))

// Grupo de Captura
console.log('contato@email.com'.replace(/(\w+)@(\w.+)/g, '$1 $2'))

// Positive Lookahead | Faz a captura do items dentro do (?=)
console.log('100%, 5px, 5rem, 10px, 100vh'.replace(/\d+(?=px)/g, 'X'))

// Negative Lookahead | Faz a captura do items dentro do (?!)
console.log('100%, 5px, 5rem, 1px, 100vh'.replace(/\d+(?!px)/g, 'X'))







// Regexp Constructor
const regexp = /\w+/gi

const regexObj1 = new RegExp ('\\w+', 'gi') // com string usa \\ para escapar
const regexObj2 = new RegExp (/\w+/, 'gi')

console.log('Javascript Linguagem 101'.replace(regexObj1, 'X'))

// propriedades do Construtor
regexObj1.flags // gi
regexObj1.global // true
regexObj1.ignoreCase // true
regexObj1.source // \w+
regexObj1.lastIndex // 0 | mostra o último indice onde o aconteceu a seleção

// métodos do Construtor

// regex.test() | faz um loop toda fez que é chamado, começa de onde parou, retorna o primeiro true
const regex = /Java/g
const frase = 'Javascript e Java'

console.log(regex.test(frase)) // true
console.log(regex.test(frase)) // true
console.log(regex.test(frase)) // false

let i = 1
while(regex.test(frase)) { // fazendo um loop enquanto Java estiver achando Java na string
    console.log(i++, regex.lastIndex)
}


// regex.exec() | diferente do test(), o exec() irá retornar uma array com mais informações do que apenas um valor booleano

const regex = /script/gi
const frase = 'Javascript, TypeScript, CoffeeScript e Java'

regex.exec(frase)


// string.match(regex) | retorna um array com todas as seleções que deram true
const regex = /[A-Za-z]+/gi
const frase = 'Javascript, TypeScript, CoffeeScript e Java'

console.log(frase.match(regex)) // [ 'Javascript', 'TypeScript', 'CoffeeScript', 'e', 'Java' ]


// string.split(regex)
const regex = /script/gi
const frase = 'Javascript, TypeScript, CoffeeScript e Java'

console.log(frase.split(regex)) // [ 'Java', 'Type', 'Coffee', 'e Java' ] | separa e exlui o que buscamos


// string.replace(regex, callback)

const tags = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`

const regex = /(?<=<)\w+/g  // positive lookbehind

console.log(tags.replace(regex, '$& class="ativo"')) // $& é a próprie seleção, no caso as tags de abertura


const emails = `
contato@yahoo.com
adyson@yahoo.com
email@yahoo.com
`

const regex = /(\w+.?-?_?@)[\w+.-?]+/gi
console.log(emails.replace(regex, '$1gmail.com'))


// callback
const emails = `
contato@yahoo.com
adyson@yahoo.com
email@yahoo.com
`

const regex = /(\w+.?-?_?@)([\w+.-?]+)/gi
emails.replace(regex, (...args) => {
    console.log(args[0]) // retorna um array com informações de cada captura
    if(args[2] === 'yahoo.com') {
        console.log(args[1] + 'gmail.com')
    }
})
