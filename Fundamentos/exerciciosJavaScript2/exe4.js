nomeDoMes = (num) => {
    switch(num) {
        case 1: 
            return 'Janeiro'
            break
        case 2: 
            return 'Feveiro'
            break
        case 3: 
            return'Março'
            break
        case 4: 
            return 'Abril'
            break
        case 5: 
            return 'Maio'
            break
        case 6: 
            return 'Junho'
            break
        case 7: 
            return 'Julho'
            break
        case 8: 
            return 'Agosto'
            break
        case 9: 
            return 'Setembro'
            break
        case 10: 
            return 'Outubro'
            break
        case 11: 
            return 'Novembro'
            break
        case 12: 
            return 'Desembro'
            break
        default:
            return 'Mês Inválido!'
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))