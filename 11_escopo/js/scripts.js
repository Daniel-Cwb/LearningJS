// esta no Escopo global
var x = 1;
var y = 3;
console.log(x, y);
function teste() {
    // Z está no Escopo local, so acesso dentro da função
    var z = 0;
    console.log(z);
    // Consigo acessar as globais dentro da função
    console.log(x);
}

teste();

// IF não apresenta escopo local
if(true){
    var p = 1;
}
console.log(p);