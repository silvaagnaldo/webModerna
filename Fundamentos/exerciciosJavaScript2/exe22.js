function menorNumero(array) {
    let menor = array[0]
    for(let i = 0; i < array.length; i++) {
       if( menor > array[i]) {
        menor = array[i]
       } 
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65]) // retornarĂ¡ 5
menorNumero([5, -15, 50, 3]) // retornarĂ¡ -15
