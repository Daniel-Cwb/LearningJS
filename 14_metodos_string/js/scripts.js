
// Length
var nome = "Daniel";
console.log(nome.length); // Retornaa quantidade de caracteres da palavra

// IndexOf - Da o index do caracter que deseja encontrar
var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu")); // Reetorna 7 que é o inicio da palavra roeu

// Slice - Remove uma parte da frase
var roeu = frase.slice(7, 11);
console.log(roeu); // Retorna roeu

// replace, trocar uma palavra da frase - No exemplo abaixo estou dando 2 replace
var novaFrase = frase.replace("roeu", "mordeu").replace("a roupa","o Pé");
console.log(novaFrase); // Retorn: O rato mordeu o Pé do rei de Roma

// toUpperCase e toLowerCase
console.log(frase.toLowerCase()); // Retun: o rato roeu a roupa do rei de roma
console.log(frase.toUpperCase()); // Retun: O RATO ROEU A ROUPA DO REI DE ROMA

// trim - Remove espaços
nome = "       Daniel            ";
console.log(nome); // Return:        Daniel         
console.log(nome.trim())// Return: Daniel

// Split - quebra um text e transforma em array - Estou separando por espaço
console.log(frase.split(" ")); // Return: ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma']

// lastIndexOf - saber o indece da ultima lalavra
var novaFrase = "Este é apenas um teste para retornar, para ver o que vai retornar";
console.log(novaFrase.indexOf("retornar"));// Return: 28
console.log(novaFrase.lastIndexOf("retornar")); // Return: 57
