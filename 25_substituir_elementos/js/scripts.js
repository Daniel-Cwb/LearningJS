// Criar um elemento
let el = document.createElement('h3');

el.classList = "testando-classe";

let texto = document.createTextNode("Este é o texto da classe criada");

el.appendChild(texto); // Adicinando texto no H3 criado

console.log(el);

let docSubstituivel = document.querySelector('.title'); // Capiturando o H1 copm classe title

console.log(docSubstituivel);

// Selecionando o Pai
//let pai = document.querySelector('body');
// ou
let pai = docSubstituivel.parentNode;

// troca os elementos
pai.replaceChild(el, docSubstituivel); // troca o H1 por H3