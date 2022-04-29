function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia [nomeDaPropriedade]
    console.log(copia)
}

removerPropriedade({a: 1, b: 2}, "a") 
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") 