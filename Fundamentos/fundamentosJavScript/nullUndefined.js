let valor; // não inicializada, não foi atribuido nem um valor a essa variável.
console.log(valor);
// console.log(valor2); // há variável não foi nem definida.

valor = null // ausência de valor.
console.log(valor);
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)