// Eventos 
var titulo = document.querySelector("p");
titulo.innerText = "ESte titulo esta cambiado"

// recibe input
function cambia_titulo(campo_texto){
    // console.log(campo_texto.value);
    titulo.innerText = campo_texto.value;
}

function cambiar_color(elemento, color){
    elemento.style = "color: " + color
}