function buscarPalavrasSemelhantes(inicio, palavras) {
    let palavraSemelhante = []
    for(let palavra of palavras) {
        if(palavra.includes(inicio)) {
            palavraSemelhante.push(palavra)
        }
    }
    console.log(palavraSemelhante)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
