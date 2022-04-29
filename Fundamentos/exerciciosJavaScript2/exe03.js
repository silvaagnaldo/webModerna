calcularSalario = (horas, valorHora) => (horas * valorHora).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
console.log(`Salário igual a ` + calcularSalario(150, 40.5))


