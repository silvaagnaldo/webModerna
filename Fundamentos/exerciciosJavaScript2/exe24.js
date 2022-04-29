function contarPalavras(string) {
    let numeroPalavras = 0
    for (let i = 0; i < string.length; i++) {
        numeroPalavras = string.split(" ")
    }
    console.log(numeroPalavras.length)
}

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
