

// operadores condicionais: ==, !=, >, <, <=, >=
// Logico: && e ||
// Not: !
// Comparação de tipo e valor


var idade = 19;
var idadeNew = 18;

if (idade > 18) {
    console.log("Pode fazer a carteira de habilitação pois tem " + idade + " anos...");
}

if (idadeNew >= 18) {
    console.log("Pode fazer a carteira de habilitação pois tem " + idadeNew + " anos...");
}

var nome = "Xavier";

if (nome == "Daniel") {
    console.log("O seu nome é Daniel");
} else if(nome == "Pedro"){
    console.log("O seu nome é Pedro");
}else{
    console.log("Não sei o seu nome");
}

// Comparação de Tipo e Valor
// 5 === 5 , compara se o valor e o mesmo e se ambos são numéricos

var num = '5';

if (num === 5) {
    console.log("O número é " + num + " exatamente igual, valor e tipo...");
}else{
    console.log("Tipo ou Valor diferente....");
}

// Operadores Lógicos

var old = 18;
var namePeople = "Mateus";

if (namePeople === "Pedro" && old === 18) {
    console.log("Esta Apto a entrar na aula...")
}

if (namePeople === "Pedro" || old === 18) {
    console.log("Ou é Pedro ou tem 10 anos...")
}

// Operador NOT
if(!(namePeople == "Pedro")){
    console.log("Não é o Pedro")
}

