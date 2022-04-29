var a = 3;
let b = 4;

var a = 30; // Com o var no jS é possível modificar o identificador, ou seja é possível redeclarar a variável. Por isso não é o mais recomendável.
b = 40; // Com let não é possível redeclarar, pois resultará em erro. 

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5; // Com const será declarado uma constante, ou seja não é possível modificar nem o valor, nem o identficador.

console.log(c);