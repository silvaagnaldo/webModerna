function gerarNumeroEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }
        
    return new Promise(resolve => {
        setTimeout(() => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        }, tempo);
    })
    
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 500),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then()
    .then(numeros =>console.log(numeros.sort())) // sort para ordenar o vetor
    .then(() => {
        console.timeEnd('promise')
    })