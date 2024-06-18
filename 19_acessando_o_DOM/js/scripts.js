// Document Object Model (DOM)
// Uma interface de programação para HTML;
// Por ele temos meios para acessar a árvore de elementos
// O DOM fornece uma cópia do HTML
// Podemos manipular evento pelo DOM para afetar o HTML
// imagem no assets da Arvore do DOM

// Acessando por Tag
var titulo = document.getElementsByTagName('h1');
console.log(titulo); // Retun o H1 Collection
console.log(titulo[0]); // Retun Acessando o DOM

var titulo2 = document.getElementsByTagName('h1')[0]; // deixando mais simplificado
console.log(titulo2); // Retun Acessando o DOM

// Acessando por ID
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo); // Retunr <p id="paragrafo">Este é o paragráfo</p>

// Acessando por Class
var itemLista = document.getElementsByClassName('item'); // Returna a collection
console.log(itemLista); /* Retunr {
    0: li.item
    1: li.item
    2: li.item
    3: li.item
}
*/

