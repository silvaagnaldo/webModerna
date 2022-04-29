let dobro = function(a) {
    return 2 * a
}

console.log(dobro(2))

dobro = (a) => {
    return 3 * a
}

console.log(dobro(2))

dobro = a => 4 * a  // Retorno implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

console.log(ola())

ola = () => 'Olá!!'
console.log(ola())

ola = _ => 'Olá!!!' // possui parametro
console.log(ola())