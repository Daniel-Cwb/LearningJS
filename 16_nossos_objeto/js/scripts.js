
// Criando um Método em um objeto
let pessoa = {
    nome: "Daniel",
    idade: 33,
    funcao: "Analista",
    falar: function() { // Criando o método
        console.log("Olá, tudo bem");
    },
    soma: function(a, b){
        return a + b;
    },
    endereco: {
        rua: "Argemiro Cândido Jardim",
        numero: 233,
        uf: "PR",
        cidade: "Curitiba"
    }
}
console.log(pessoa.funcao); // Retona o valor de funcao =  Analista
pessoa.falar(); // Chamando método. Return: Olá, tudo bem
var result = pessoa.soma(10,15);
console.log(result); // Return: 25

//Acessando objeto dentro do objeto
console.log(pessoa.endereco.rua); // Return: Argemiro Cândido Jardim