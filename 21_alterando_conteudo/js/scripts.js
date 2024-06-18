

// Alterando titulo
var title = document.querySelector("#title");
console.log(title);

// Podemos alterar de duas formas

// 1 - InnerHTML
title.innerHTML = "Testando o texto alterado";




// 2 - textContent -> Mais utilizado (recomendado)

var title2 = document.querySelector(".title2");

title2.textContent = "Testando o texto alterado 2";
console.log(title2);