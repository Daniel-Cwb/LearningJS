
var lista = ['Laranja', 'Uva', 'Maça', 'Pera', 'Jaca', 'Limão'];

// Utiliza sempre o document para criar elementos no DOM
var listaUl = document.createElement('ul');

// Vai pegar todos os elementos com a tag body
var body = document.getElementsByTagName('body');

// o body eu recebo uma collection em html, usando body[0] eu pego somente o body
console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
    // criando o li
    var liFor = document.createElement('li');

    // Adicionando o texto dentro do Li
    var textLi = document.createTextNode(lista[i]);

    // Unindo-os
    liFor.appendChild(textLi);

    listaNoBody[0]. appendChild(liFor);

    console.log(lista[i]);
}