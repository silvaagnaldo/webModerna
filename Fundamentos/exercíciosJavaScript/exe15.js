function carro(tipo) {
    switch(tipo) {
        case 'hatch': 
            return "Compra efetuada com sucesso"
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return "Tem certeza que não prefere este modelo?"
            break
        default:
            return "“Não trabalhamos com este tipo de automóvel aqui”."

    }
}

console.log(carro('hatch'))
console.log(carro('sedans'))
console.log(carro('motocicletas'))
console.log(carro('caminhonetes'))
console.log(carro('avião'))
