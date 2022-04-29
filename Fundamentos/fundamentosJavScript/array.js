const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // mostra o valor do índice 0 e do índice 3.
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); //adiciona valores no final do array.
console.log(valores);

console.log(valores.pop()); // retira o último elemento do array.
delete valores[0]; // Deleta o valor do índice selecionado.
console.log(valores);

console.log(typeof valores);
