function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Tv', 2199.49))
console.log(criarProduto('celular', 1399,99))
console.log(criarProduto('Tablet', 799.00))