/*
function filtrarNumeros(array) {
    const resultado = []
    for(let item of array) {
        if(typeof item === "number") {
            resultado.push(item)
        }
    } 
    console.log(resultado)
}
*/

function filtrarNumeros(array) {
    console.log(array.filter(item => typeof item === "number"))
}
   
filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"]) 
