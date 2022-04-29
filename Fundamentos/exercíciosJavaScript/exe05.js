function formatacao (a, b) {
const soma = (a + b).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    console.log(soma)
}

formatacao(0.1, 0.2)

