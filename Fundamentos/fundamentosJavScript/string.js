const escola = "Cod3r";

console.log(escola.charAt(4)); // mostra o caracter de uma string que se encontra em determinado índice.
console.log(escola.indexOf('d')); // mostra em qual índice se encontra determinado letra dentro de uma string.

console.log(escola.substring(1)); // Vai mostrar a partir do índice 1.
console.log(escola.substring(0, 3)); // parte do índice 0, e mostre 3 caracteres, ou seja índice 0, 1, 2.

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); // troca o conteudo de um índice.

console.log('Ana, Maria, Pedro'.split(',')); // Transforma em um array.

