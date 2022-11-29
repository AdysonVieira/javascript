const cpfsList = document.querySelectorAll('.cpf li');
// retorna uma array com os textos dos elementos
const elementText = ([...elements]) => {
    return elements.map((element) => element.innerText)
}
// pega tudo que não for dígito e substitui por nada e retorna apenas os números
const limpaCPF = (cpf) => {
    return cpf.replace(/\D/g, '')
}
// recebe o número do CPF e formata em 000.000.000-00
const formataCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}
// recebe uma lista de cpfs, usa as funções limpaCPF e formataCPF e retorna uma lista formatada
const retornaListaCPFsLimpos = (cpfs) => {
    return cpfs.map(limpaCPF).map(formataCPF)
}
// recebe uma lista ou NodeList, formata e substitui o texto
const substituiCPF = (elementList) => {
    const elements = elementText(elementList) // pega os textos dos elementos
    const CPFsFormatados = retornaListaCPFsLimpos(elements) // lista de cpfs formatada
    elementList.forEach((cpf, index) => {
        cpf.innerText = CPFsFormatados[index] // substitui o texto antigo pelo formatado
    })
}

substituiCPF(cpfsList)
