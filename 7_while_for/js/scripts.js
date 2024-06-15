
// While -> Enquanto

var x = 0;

while (x < 5) {
    console.log("Testando repetição " + (x +1));

    // incrementador para sair do while e evitar loop infinito
    x++;

}
console.log("\n--------------------\n");

var arr = ['teste','testando','a','b'];
var y = 0;

while (y <= 3) {
    console.log(arr[y]);

    y++;
}

console.log("\n--------------------\n");

var palavra = "Daniel";
var i = 0;
// Acessando cada letra da variavel
while (i < 6 ) {
    console.log(palavra[i])

    i++;
}
console.log("\n--------------------\n");
/*
Temos algumas maneiras de atribuir um valor a uma variavel
As mais utilizadas são: +=, -=, *=, /=
Basicamente é uma forma resumida da operação x = x+y;
Em Loops e rotineiro usar também ++ e --
*/

var num = 1;
var num2 = 2;
// Soma
console.log(num = num + num2);
console.log(num += num2);

// subtração
console.log(num -= num2);

// Multiplicação
console.log(num *= num2);

// Divisão
console.log(num /= num2);
console.log("\n--------------------\n");
// For
// Passando 1 a variavel de incremento e depois condição e incremento
for (var c = 0; c < 10; c++ ){
    console.log("For repetição número " + c);
}
var array = [1,2,3,4,5];

console.log("\n--------------------\n");

for (var j = 0; j < array.length; j++ ){
    console.log("For repetição Array número " + array[j]);
}

console.log("A quantidade do Arrey e de " + array.length +" Valores")