
// Evento Click
// O click é ativado quando usuario clica em um elemento em que atrelamos o evento

var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    console.log("Clicou no botão");
    console.log(this); // This vira o elemento btn

    this.style.color = "red"; // Mudando a cor da letra do botão
});

// Atrelando o evento ao title

let title = document.querySelector("#title");

title.addEventListener("click", function() {
    console.log("Clicou no Title");
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none"; // Oculta o Subtitle

});

// Usa tambem o dblclick no lugar do Click para capturar apenas com doble click