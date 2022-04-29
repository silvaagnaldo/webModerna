function maiorOuIgual(valor1, valor2) {
    //if((valor1 > valor2) || (valor1 === valor2)) {
       // return true
    //} else {
        //return false
   // }
   if(typeof valor1 !== typeof valor2) {
       return false
   }
   return valor1 >= valor2
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))