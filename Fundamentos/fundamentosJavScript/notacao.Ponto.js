console.log(typeof console)
console.log(Math.ceil(6.1)) // Arredondamento para cima.
console.log(Math.floor(6.1)) // Arredondamento para baixo.

const obj1 = {}
obj1.nome = 'Bola'      // Tanto faz, dessa forma 
obj1['nome2'] = 'Bola2' // ou essa.
console.log(obj1)
console.log(obj1.nome)
console.log(obj1.nome2)

function Obj(nome) {
    this.nome = nome  //This serve para tornar essa função pública.
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()