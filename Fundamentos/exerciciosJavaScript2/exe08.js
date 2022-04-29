function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) {
        console.log(numero >= minimo && numero <= maximo)
    } else {
        console.log(numero > minimo && numero < maximo) 
    }  
}


estaEntre(10, 100, 50) 
estaEntre(16, 100, 160) 
estaEntre(3, 150, 3) 
estaEntre(3, 150, 3, true) 
