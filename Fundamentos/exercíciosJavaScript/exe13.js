function diaUtil(dia) {
    switch(dia) {
        case 1: 
            return "Fim de semana"
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia Útil"
            break
        case 7:
            return "Fim de semana"
            break
        default:
            return "Dia inválido"
    }
}

console.log(diaUtil(1))
console.log(diaUtil(3))
console.log(diaUtil(7))
console.log(diaUtil(11))
console.log(diaUtil('a'))