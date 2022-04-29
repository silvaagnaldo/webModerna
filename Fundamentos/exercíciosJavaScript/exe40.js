function compararNotas(vetor) {
    let conceitos = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >=0 && vetor[i] < 5) {
            conceitos.push('D')
        } else if(vetor[i] < 6.9) {
            conceitos.push('C')
        } else if(vetor[i] < 8.9) {
            conceitos.push('B')
        } else if(vetor[i] <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push("Nota inválida!")
        }
    }
    return conceitos
}

let vetor = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = compararNotas(vetor)

console.log(vetorConceitos)
