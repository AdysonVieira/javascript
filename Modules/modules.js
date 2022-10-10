// Porque usar?

// ####### Manutenção
// Dividir o código em diferentes arquivos com funções específicas(módulos) facilita a manutenção

// ####### Compartilhamento
// O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico

// ####### Nativo do ES6
// Ferramentas que permintem dividirmos o código em módulos já existe a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são Nativos

// usar o type="module" para 
<script type="module" scr="js/script.js"></script>

// passar a palavra-chave default (se for único)
export default function scrollSuave() {
    ...
}

// importe o arquivo 
import scrollSuave from './scroll-suave.js'

// Named Exports | pode importar mais de um valor, passar os nomes entre chaves. O nome importado precisa ser igual ao exportado

export function animaScroll() {
    ...
}

export function carregaScroll() {
    ...
}

import {animaScroll, carregaScroll} from './scroll-suave.js'

// Importe todos os valores em um objeto
import * as scroll from './scroll-suave.js'

// Valores do Export
export function funcao() {
    ...
}
export const nome = 'Adyson'
export const numero = 123
export const objeto = {marca: carro}
export class Carro {}

import * as config from 'js/script.js'
config.nome
config.numero
config.objeto

// Use strict

// Variáveis ficam apenas no módulo, não são importadas se não tiverem o export

// o This no módulo faz referência a undefined

// Assíncrono