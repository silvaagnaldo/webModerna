function calcularMedia(array) {
    let soma = 0
    let res = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
        res = soma / array.length
    }
    console.log(res)
}


calcularMedia([0, 10]) 
calcularMedia([1, 2, 3, 4, 5])