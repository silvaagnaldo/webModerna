/*
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
    }
    */

function receberPrimeiroEUltimoElemento(array) {
    const primeiroElemento = array.shift()
    const ultimoElemento = array.pop()
    return [primeiroElemento, ultimoElemento]
}

/*
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}
*/

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) )

