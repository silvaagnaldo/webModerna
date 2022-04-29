function ladosTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB ==ladoC) {
        return 'Triângulo Equilátero'
    } else if((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        return 'Triângulo Isóceles'
    } else {
        return 'Triângulo Escaleno'
    }
}

console.log(ladosTriangulo(1, 3, 2))