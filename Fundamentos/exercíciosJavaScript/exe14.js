function verficarFrutas(fruta) {
    switch(fruta) {
        case 'maça':
            return  "Não vendemos esta fruta aqui"
            break
        case 'kiwi':
            return "Estamos com escassez de kiwis"
            break
        case 'melancia':
            return "Aqui está, são R$ 3,00 reais o quilo"
            break
        default:
            return "Sorry! Só trabalhamos com kiwi e melancia"
    }
}

console.log(verficarFrutas('maça'))
console.log(verficarFrutas('kiwi'))
console.log(verficarFrutas('melancia'))
console.log(verficarFrutas('abacate'))
