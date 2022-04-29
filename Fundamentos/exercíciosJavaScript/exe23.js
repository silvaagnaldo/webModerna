function mediaFinal(codigoAluno, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    if((media >= 5) && (media <=10)) {
        return `Código do aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Aprovado.` 
    } else if((media < 5) && (media >= 0)) {
        return `Código do aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Reprovado.`
    } else {
        return "Média inválida!"
    }
}

console.log(mediaFinal(01, 10, 10, 10))
console.log(mediaFinal(02, 7, 7, 7))
console.log(mediaFinal(03, 5, 5, 5))
console.log(mediaFinal(04, 3, 3, 3))
console.log(mediaFinal(05, 0, 0, 0))
console.log(mediaFinal(06, 11, 11, 11))
console.log(mediaFinal(07, -10, 0, 2))
console.log(mediaFinal(123, 2.8, 6, 3.5))
