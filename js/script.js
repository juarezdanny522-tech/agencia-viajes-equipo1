// Esperamos que cargue la página
document.addEventListener("DOMContentLoaded", function () {
    
    const formulario = document.getElementById("form-contacto");
    const mensajeExito = document.getElementById("mensaje-exito");

    formulario.addEventListener("submit", function (evento) {
        // Evitamos que se recargue la página
        evento.preventDefault();

        // Mostramos el texto de éxito quitando la clase que lo oculta
        mensajeExito.classList.remove("ocultar");

        // Limpiamos los cuadros de texto
        formulario.reset();
    });
});
