function calculadora(n1, n2, opracao) {
    switch(opracao) {
        case '+':
            return n1 + n2 
            break
        case '-':
            return n1 - n2
            break
        case '*':
            return n1 * n2
            break
        case '/': 
            return n1 / n2
            break
        case '%':
            return n1 % n2
            break
        case '**':
            return n1 ** n2
            break
        default:
            return "Operação inválida!"

    }
}

console.log(calculadora(4, 2, '+'))
console.log(calculadora(4, 2, '-'))
console.log(calculadora(4, 2, '*'))
console.log(calculadora(4, 2, '/'))
console.log(calculadora(4, 2, '%'))
console.log(calculadora(4, 2, '**'))
console.log(calculadora(4, 2, 'kkk'))