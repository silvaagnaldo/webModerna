function planoTrabalho(plano, salarioAtual) {
    switch(plano) {
        case 'A':
            return (salarioAtual + ((salarioAtual * 10) / 100)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
            break
        case 'B':
            return (salarioAtual + ((salarioAtual * 15) / 100)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
            break
        case 'C':
            return (salarioAtual + ((salarioAtual * 20) / 100)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
            break
        default:
            return "Plano inválido!"
    }
}

console.log(planoTrabalho('A', 1000))
console.log(planoTrabalho('B', 1000))
console.log(planoTrabalho('C', 1000))
console.log(planoTrabalho('kkk', 1000))