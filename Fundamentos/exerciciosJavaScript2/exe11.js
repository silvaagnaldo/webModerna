 /*
 simboloMais = param => {
    let res = ''

    for(let i = 0; i < param; i++) {
        res += '+' 
    }
    return res
}
*/

function simboloMais(param) {
    return '+'.repeat(param)
}

console.log(simboloMais(2)) 
console.log(simboloMais(4)) 
console.log(simboloMais(6)) 
