function valorPlano(valorInicial, idade) {
    if((idade > 0) && (idade < 9)) {
        return (valorInicial + 80).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    } else if(idade < 30) {
        return (valorInicial + 50).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    } else if(idade < 60) {
        return (valorInicial + 95).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    } else {
        return (valorInicial + 130).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
}

console.log(valorPlano(100, 7))
console.log(valorPlano(100, 25))
console.log(valorPlano(100, 40))
console.log(valorPlano(100, 69))
