
// Utilizado para sempre se referir ao objeto global Window

console.log(this); // Retorn: todos arquivos que tem acesso do window

alert('Ola como vai'); // Retorna um popup na tela escrito ola como vai

// Criando um Método em um objeto
let pessoa = {
    nome: "Daniel",
    idade: 33,
    funcao: "Analista",
    falar: function() { // Criando o método
        console.log("Meu nome é: " + this.nome);
    },
    aniversario: function() { // Criando o método
        this.idade += 1;
    }
}

pessoa.falar(); //Return:  nome é: Daniel
pessoa.aniversario(); 
console.log(pessoa.idade); //Return:  34