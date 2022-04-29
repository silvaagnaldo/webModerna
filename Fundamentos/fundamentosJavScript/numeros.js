const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //isInteger verifica se o numero é inteiro ou não, true ou false.
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed para fazer a formatação das casas decimais.
console.log(media.toString(2)); // Converte em binário.
console.log(typeof media); // typeof, mostra o tipo de dado.

console.log(typeof Number); // number com n em minúscula é um tipo de dado, Number com N maiúscula é uma função.
