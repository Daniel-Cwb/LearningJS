//
// Permite executar uma função depois de outra ação
//

// ### Callback de forma Sincrona ###

//Função para debug
function exibir(num){
    console.log("A operação resultou em: " + num);
}

//Função para soma
function soma(a,b, callback){
    let op = a + b;
    callback(op);
}

//Função para Multiplicar
function multiplica(a,b, cb){
    let op = a * b;
    cb(op);
}

soma(2,2, exibir);

multiplica(2,4, exibir);

// ### Callback de forma Assíncrona  ###

// SetTimeout
// 1 segundo é 1000
setTimeout(function(){
    console.log("Testando o setTimeout"); // Vai esperar 2s para printar essa informação
},2000);


// SetInterval
// 1 segundo é 1000
setTimeout(function(){
    console.log("Testando o setInterval"); // Vai esperar 2s para printar essa informação
},1000);

// Clear SetTimeout
setTimeout(function(){
    console.log("Testando o setTimeout"); // Vai esperar 2s para printar essa informação
},2000);


// Clear Interval
// Adiciona o SetInterval a uma variavel
var x = 10;
var intervalo = setInterval(function(){
    console.log("ClearTimerout");
},2000);

if(x >= 8){
    clearInterval(intervalo);
    console.log("O x é maior de 8");
}

