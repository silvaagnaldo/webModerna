const pilotos = ['vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona como último elemento do array
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // primeiro pega a posição de inicio da remoção e o segundo item pega quantos elementos serão removidos apartir daquela posição
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array, nesse caso ele está pegando a partir do índice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Novo array, nesse caso começa pegando o índice 1 e terminando antes do índice 4.
console.log(algunsPilotos2)