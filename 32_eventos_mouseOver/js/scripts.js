// Mouse Out e Mouse Over
// É ativado quando o ponteiro do mouse passa  em cima do elemento0 que criamos o evento

// Mousse Over
let title = document.querySelector("#title");

title.addEventListener("mouseover", function () {

    this.style.backgroundColor = "yellow";
})

// Mouse Out
title.addEventListener("mouseout", function () {

    this.style.backgroundColor = "white"; // Quando sair o mause fica branco background
})

//
// Quando coloca o mouse em cima do subtitle aparece o paragrafo
//

let subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function () {
    var legenda = document.querySelector("#legenda"); // Capturando o paragrafo
    legenda.classList.remove("hide"); // removendo a classe que oculta
})

subtitle.addEventListener("mouseout", function () {
    var legenda = document.querySelector("#legenda"); // Capturando o paragrafo
    legenda.classList.add("hide");// Add a classe que oculta
})