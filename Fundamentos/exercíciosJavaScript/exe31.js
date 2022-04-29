function numerosNegativos(vetor) {
    let qtdNumerosNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNumerosNegativos++
        }
    }
    return qtdNumerosNegativos
}

vetor = [2, 3, 8, -1, 9, -5, 0, 4]
console.log(numerosNegativos(vetor))