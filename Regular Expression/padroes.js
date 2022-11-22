// Padrão para CEP
const regexCEP = /\d{5}[\s-]?\d{3}/g
const regexCPF = /(?:\d{3}[.-]?){3}?\d{2}/g
const regexCNPJ = /\d{2}[.-\s]?(?:\d{3}[\s.-/]?){2}(?:\d{4}[\s.-])\d{2}/g
const regexTelefoneBR = /(?:\+?55?[\s.]?)?(?:\(?\d{2}?\)?[\s.-])?(?:\d{4,5}[\s-]?)(?:\d{4}))/g
