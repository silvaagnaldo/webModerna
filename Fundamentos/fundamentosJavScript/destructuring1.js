// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa  // serve para desestruturar o objeto, dentro das chaves, transformando em variável.
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Podendo também ser criadas novas variáveis mais simples
console.log(n, i)

// No caso de um objeto dentro de um objeto
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)