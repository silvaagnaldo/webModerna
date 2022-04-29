let vetorPilha =  [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorPilha, vetorAdiciona) {
    let vetorFinal = vetorPilha.concat(vetorAdiciona)
    console.log(vetorPilha)
    console.log(vetorAdiciona)
    console.log(vetorFinal)
}

function adicionarVetor2(vetorPilha, vetorAdiciona) {
    for(let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }
    
    console.log(vetorAdiciona)
    console.log(vetorPilha)
    
}

adicionarVetor(vetorPilha, vetorAdiciona)
adicionarVetor2(vetorPilha, vetorAdiciona)