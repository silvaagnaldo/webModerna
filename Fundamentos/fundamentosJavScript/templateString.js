const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`;

console.log(concatenacao);
console.log(template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`); //Só irá fazer a soma do que está dentro do par de chaves.

const up = texto => texto.toUpperCase(); // Para transformar tudo em maiúscula.
console.log(`Ei... ${up('cuidado')}!`);