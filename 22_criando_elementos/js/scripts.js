

//
// Criando novo paragrafo e adicionando no HTML
//
let novoParagrafo = document.createElement('p');

let texto = document.createTextNode("Este e o conteudo do paragrafo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo); // Return: <p>Este e o conteudo do paragrafo</p>

let body = document.querySelector("body");

//
// Inserindo no Body
//
body.appendChild(novoParagrafo);