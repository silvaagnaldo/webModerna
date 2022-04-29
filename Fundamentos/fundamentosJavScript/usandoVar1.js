{
    {
        {
            {
                var sera = 'sera'
            }
        }
    }
}
console.log(sera) // Var em javaScript mostrara o valor da variavel a mesmoestando fora daquele bloco.

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) No caso da função sóp será exibido dentro dela caso contrário acarretará em um erro.