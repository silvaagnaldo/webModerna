let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]

function trocarVetor(a, b) {
    if(a.length == b.length) {
        for(let i = 0; i < a.length; i++) {
            a[i] = a[i] + b[i]
            b[i] = a[i] - b[i]
            a[i] = a[i] - b[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }
    console.log('Novo vetor A: ' + a)
    console.log('Novo vetor B: ' + b)
}

trocarVetor(a, b)