let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, numero) {
    vetorResultado = []
    vetor.forEach(element => {
        vetorResultado.push(element * numero)
    });
    console.log(vetorResultado)
}

multiplicaVetor(vetor, 3)