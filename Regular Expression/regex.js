// Regular Expression | Regexp ou Regex são expressões utilizadas para realizarmos buscas/substituições de padrões em string. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split()

// procura a
const padraoRegexp = /a/

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

// Word | O /w irá selecionar qualquer caractere alfanumerico e  underline. É a mesma coisa que [A-Za-z0-9_]
console.log('Guarda-chuva R$ 23,00'.replace(/\w/g, '!')) // !!!!!!-!!!!! !$ !!,!!


// Word | O /W irá negar caractere alfanumerico e  underline. É a mesma coisa que [^A-Za-z0-9_]
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
