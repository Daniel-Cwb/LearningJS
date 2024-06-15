

let x = 5; // é quase igual a declara var x = 5
console.log("Valor antes do If: " + x);

// O grande diferencial e que se eu setar um valor dentro de um if ele não vai alterar o global como no var
if(true){
    let x = 20;
    console.log("Valor dentro do If: " + x); // mudei para 20 sem alterar o valor global de x
}

console.log("Valor final fora do If: " + x);

// O cost cria um aconstante e não posso mudar esse valor
const y = 10;
console.log("Valor const Antes do If: " + y);
// y = 20; não permite essa ação
// dentro do if vai separar os escopos também
if(true){
    let y = 20;
    console.log("Valor const dentro do If: " + y); // mudei para 20 sem alterar o valor global de y
}

console.log("Valor const Depois do If: " + y); //  continua o valor de 10