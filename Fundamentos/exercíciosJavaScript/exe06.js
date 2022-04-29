const montanteJuroSimples = (capitalInicial, taxaAplicacao, tempoAplicacao)  => ((capitalInicial * taxaAplicacao * tempoAplicacao) + capitalInicial).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})


function montanteJuroComposto(capitalInicial, taxaAplicacao, tempoAplicacao) {
    return (capitalInicial * (1 + taxaAplicacao) ** tempoAplicacao).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
}

console.log(montanteJuroSimples(1000.00, 0.05, 12))
console.log(montanteJuroComposto(1000.00, 0.05, 12))