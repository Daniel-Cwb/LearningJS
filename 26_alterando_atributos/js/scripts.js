// Alterando Atributos

let title = document.querySelector('#title');
// Adicionando atibuto class
title.setAttribute("class", "nome-class");
console.log(title);

// Delabilitando o button
let button = document.querySelector('#button');
button.setAttribute("disabled", "disabled"); // 1 Disabled (O atributo para delabilitar o bottun) - 2º Disabled (Valor)

let subtitle = document.querySelector('.subtitle');
subtitle.setAttribute("id", "idSubTitle");

console.log(subtitle);

// Remover Atributo
let list = document.querySelector('#lista');
list.removeAttribute("id");

list.setAttribute("class", "adicionadoClass");