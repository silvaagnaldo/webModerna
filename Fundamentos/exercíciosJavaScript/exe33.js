function concatenarVetores(vetor1, vetor2, vetor3) {
    let soma1 = vetor1.concat(vetor3)
    let soma2 = vetor3.concat(vetor2)
    console.log(soma1)
    console.log(soma2)

}
vetor1 = [1, 2, 3, 4]
vetor2 = ['Arthur', 'Christian', 'Yuri', 'Galdino']
vetor3 = [1.1, 2.2, 3.3, 4.4]
concatenarVetores(vetor1, vetor2, vetor3)