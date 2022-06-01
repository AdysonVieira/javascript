const curso = {
    nome: 'JavaScript',
    completar() {
        console.log(this.nome); // console.log(curso.nome)
    }
}

console.log(curso.nome)
