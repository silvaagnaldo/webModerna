function escrever(numero) {
    switch(numero){
        case 0:
            return "Zero"
            break
        case 1:
            return "Um"
            break
        case 2:
            return "Dois"
            break
        case 3:
            return "Três"
            break
        case 4:
            return "Quatro"
            break
        case 5:
            return "Cinco"
            break
        case 6:
            return "Seis"
            break
        case 7:
            return "Sete"
            break
        case 8:
            return "Oito"
            break
        case 9:
            return "Nove"
            break
        case 10:
            return "Dez"
            break
        default:
            return "Número fora do intervalo!"
    }
}

console.log(escrever(-1))
console.log(escrever(0))
console.log(escrever(1))
console.log(escrever(2))
console.log(escrever(3))
console.log(escrever(4))
console.log(escrever(5))
console.log(escrever(6))
console.log(escrever(7))
console.log(escrever(8))
console.log(escrever(9))
console.log(escrever(10))
console.log(escrever(11))
