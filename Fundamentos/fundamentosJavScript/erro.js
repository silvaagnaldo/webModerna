function tratarErrorELancar(erro) {
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'mensagem'
    throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritando(obj)