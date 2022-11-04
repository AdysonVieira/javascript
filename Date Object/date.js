// new Date() | Construtor cria um objeto com valores ano, mês, dia, horário e mais. A data é baseada no relógio interno do computador

const agora = new Date();
agora;
// Semana, mês, dia, ano, HH:MM:SS, GMT
agora.getDate() // Dia
agora.getDay() // Dia da semana, ex. 0 = sunday, primeiro dia da semana
agora.getMonth() // Número do mês, ex. 0 = jan, primeiro mês do ano
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getSeconds() // Segundos
agora.getTime() // Ms desde 1970
agora.getUTCHours() - 3 // Brasília | fuso-horário

const aniversario = new Date('dec 31 2022 23:59')



// Contando dias
const agora = new Date();
const promocao = new Date('dec 21 2022 23:59')

function calculaDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000)
}

const diasAgora = Math.floor(calculaDias(agora.getTime()))
const diasPromocao = Math.floor(calculaDias(promocao.getTime()))

console.log(`Faltam ${diasPromocao - diasAgora} dias para a promoção`, diasAgora, diasPromocao)