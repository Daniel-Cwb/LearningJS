// Criar elemento

let el = document.createElement("div");

el.classList = "div-criada";
console.log(el); // Return: <div class="div-criada"></div>

let container = document.querySelector("#container");

container.appendChild(el); // Adiciona o elemento criado ao container

// Outra maneira de inserir na pagina = inserBefore - insere antes

let al2 = document.createElement("div");
al2.classList = "div-before";

let al3 = document.querySelector("#container .div-criada");

container.insertBefore(al2, al3); // Primeiro o que vai inserir o depois o de referencia que vai inserir antes dele



