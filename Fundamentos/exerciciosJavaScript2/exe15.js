/*
objetoParaArray = objeto => {
   let array = []
   for(let chave in objeto) {
        array.push([chave, objeto[chave]])
   }
   console.log(array)
}
*/

/*
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
   console.log(resultado)
}
*/
function objetoParaArray(objeto) {
    console.log(Object.entries(objeto))
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) 
    objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) 
    
    