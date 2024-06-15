// Métodos numéricos (parseInt, parseFloat)

// parseFloat - Convertendo a string para float
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999')); // Outro método de converter

// parseInt - Convertendo a string para Int
console.log(parseInt('12'));
console.log(Number.parseInt('12')); // Outro método de converter

// toFixed - Limitar as casas decimais
console.log(23.999999.toFixed(2)); // Limitando para duas casas decimais após a virgula

// isNaN -  is not a number
console.log(isNaN("teste")); // return true
console.log(isNaN(20)); // return false
console.log(isNaN('20')); // return false -  converte para número nesse caso

// MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE); // Mostra o valor maximo que se pode trabalhar
console.log(Number.MIN_VALUE); // Mostra o valor minimo que se pode trabalhar

console.log(2.7976931348623157e+308) // return Infinity