function funcaoDaSorte(num) {
    let sorteado = 0
    for(let i = 1; i < 11; i++) { 
        sorteado = Math.floor(Math.random(i) * 10 ) 
    }
    if(num === sorteado) {
        console.log(`Parabéns! O número sorteado foi o ${sorteado}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${sorteado}`)
    }
}

funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
