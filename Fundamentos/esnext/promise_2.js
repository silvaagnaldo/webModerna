/*
setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(() => {
            console.log('Executando callback...')
        }, 2000);
    }, 2000);
}, 2000);*/

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        console.log('Executando promise...')
        setTimeout(() => {
            resolve()
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor(3000))
    .then(esperarPor)