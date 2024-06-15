// Usando Break para parar loop de repetição
var array = [1,2,3,4,5,6,7,8,9,10]

for (var i = 0; i < array.length; i++) {

    console.log(array[i])

    if (i === 5) {
        break;
    }
}

console.log("Deu break...")

// Usando Continue para pular valor no loop de repetição
var x = 10;
while(x < 100){

    x += 10;

    if(x === 60 || x === 90){
        console.log("CONTINUE");
        continue;
    }
    console.log("Testando continue " + x);
}
