// localStorage | guarda na memória do computador um objeto


// salva os dados
function saveValues(key, value) {
    localStorage[key] = value;
}

// seta os dados
function setValues() { 
    const keys = Object.keys(localStorage) // chaves salvas no localStorage
    // para cada chave salva no localStorage
    keys.forEach(name => {
        objeto[name](localStorage[name].value) // seto no objeto handleStyle 
        formulario.elements[name].value = localStorage[name] // seto no value do input form os valores de localStorage
    })
}