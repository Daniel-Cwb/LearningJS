/* 
Number = +Infinity, -Infinity e NaN (Not a Number)
String
Boolean
Null
Undefined
Object
*/

// Number 

var numero = 5;

// Vendo o tipo de variavel
console.log(typeof numero);
console.log(numero);

var textoComNumero = '12345';
console.log(typeof textoComNumero);
console.log(textoComNumero);


console.log(typeof NaN);
console.log(typeof -Infinity);
console.log(typeof +Infinity);

// String

var nome = "Daniel";
console.log(nome);
console.log(typeof nome);

var sobrenome = "Fialho";

var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Escrever na pagina
document.write("Olá Mundo");

console.log("Meu nome é Daniel " + sobrenome + " e moro na casa de número " + numero);

// Bollean

var condicao = true;
console.log(condicao);
console.log(typeof condicao);

// Underfined e Null

var nomeNull = null; // Null
var sobrenomeUnderfined; // Underfined
console.log(nomeNull);
console.log(sobrenomeUnderfined);

// Objetos

var obj = {
    nome: "Daniel",
    idade: 33,
    profissao: "Analista"
};
console.log(obj);
// Acessando objeto
console.log(obj.profissao);
console.log("O meu nome é: " + obj.nome);
obj.nome = "Pedro";
console.log("O meu nome agora é: " + obj.nome);

obj.graduacao = true;
console.log(obj);

// Arrays
var arr = [5,"Daniel",true, {teste: 1, teste: 2}]; // obj {}

console.log(arr[0]);
