// Obtener el botón
var botonMostrar = document.querySelector("button");

// Agregar un evento de clic al botón
botonMostrar.addEventListener("click", function() {
    // Obtener el elemento con el id "nuevoContenido"
    var nuevoContenido = document.getElementById("nuevoContenido");
    
    // Mostrar el nuevo contenido cambiando el estilo de visualización a "block"
    nuevoContenido.style.display = "block";
});
