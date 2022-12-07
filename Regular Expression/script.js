import ValidaCPF from "./valida-cpf.js";

const campoCPF = document.getElementById('cpf')

const initClass = new ValidaCPF(campoCPF)

console.log(initClass.adicionarEvento())
