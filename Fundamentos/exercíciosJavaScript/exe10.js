function divisivelPorTres(valor) {
    if(valor % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivelPorTres(3))
console.log(divisivelPorTres(4))
console.log(divisivelPorTres(9))
console.log(divisivelPorTres(11))