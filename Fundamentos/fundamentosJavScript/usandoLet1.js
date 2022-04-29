/* 
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
*/


let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)


/*
let numero = 1
{
    let numero2 = 2                  //Aqui ele procura o valor dentro do bloco, como não encontra utiliza o de fora
    console.log('dentro =', numero)
}
console.log('fora =', numero)
*/