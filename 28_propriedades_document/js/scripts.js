// Propriedades Document

console.log(document.body);
console.log(document.head);

// Capturo os links da pagina também
console.log(document.links);

// capturando o 1 link
console.log(document.links[0]);

// Mudando nome do Link de Google pata Twitter
document.links[0].textContent = "Twitter";

// Pegando a URL
console.log(document.URL);

// Pegando o title
console.log(document.title);