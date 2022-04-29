let a = 7;
let b = 94;

let valorTemporario = a;
a = b;
b = valorTemporario;

// Pode ser feito assim: 
// [a, b] = [b, a];

console.log(a);
console.log(b);