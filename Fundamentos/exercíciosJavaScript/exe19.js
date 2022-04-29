function cardapio(codigo, quantidade) {
    switch(codigo) {
        case 100:
            var preco = 3.00
            var res = quantidade * preco
            return `\n ${quantidade} Cachorro Quente, valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        case 200:
            var preco = 4.00
            var res = quantidade * preco
            return `\n ${quantidade} Hambúrguer Simples, valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        case 300:
            var preco = 5.50
            var res = quantidade * preco
            return `\n ${quantidade} Cheeseburguer, valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        case 400:
            var preco = 7.50
            var res = quantidade * preco
            return `\n ${quantidade} Bauru , valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        case 500:
            var preco = 3.50
            var res = quantidade * preco
            return `\n ${quantidade} Refrigerante, valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        case 600:
            var preco = 2.80
            var res = quantidade * preco
            return `\n ${quantidade} Suco, valor: ${res.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`
            break
        default:
            return '\n Número fora do intervalo.'
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(000, 2))