// Length
var arr = [1,2,3,4,5];
console.log(arr.length); // Return: 5

// push - Adicionar elementa ao array
arr.push(6);
console.log(arr.length); // Return: 6

arr.push("Qualquer coisa");
console.log(arr); // Return: [1, 2, 3, 4, 5, 6, 'Qualquer coisa']
console.log(arr.length); // Return: 7

// pop - Remover um elemento do fim do array 
arr.pop();
console.log(arr);

// unshift - Adiciona no começo do Array
arr.unshift(0);
console.log(arr); // Return: [0, 1, 2, 3, 4, 5, 6]

// shift - Remove o 1 elemento do array
arr.shift(); // Removendo o 0 do começo
console.log(arr)// Return: [1, 2, 3, 4, 5, 6]

// isArray - valida se é uma array
console.log(Array.isArray(5)); // Return: false
console.log(Array.isArray(arr)); // Return: true

// Splice -  Adiciona no meio
arr.splice(2,0,999); // (2,0,99) - 2 adicionar acima do 2 indice, 0 =  Deletar 0 elemento, 999 = Adicionar o 999
console.log(arr); // Return: [1, 2, 999, 3, 4, 5, 6]

arr.splice(2, 1) // Removendo o elemento na posição 2 - o 999
console.log(arr); // Return: [1, 2, 3, 4, 5, 6]

// Join -  Transforma Array em String
console.log(arr.join(" ")); // transformando em string separado por espaço. Return: 1 2 3 4 5 6
console.log(arr.join("@")); // transformando em string separado por @. Return: 1@2@3@4@5@6

// Reverse - Inverter um Array
var frase = "O rato roeu a roupa do rei de Roma";
var fraseArray = frase.split(" "); // Convertendo em array
console.log(fraseArray); //Return: ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma']
// Invertendo posições do array com reverse
console.log(fraseArray.reverse()); //Return: ['Roma', 'de', 'rei', 'do', 'roupa', 'a', 'roeu', 'rato', 'O']