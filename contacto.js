document.addEventListener("DOMContentLoaded", function () {
    const formContacto = document.getElementById("form-contacto");

    formContacto.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("¡Gracias por tu mensaje! Te responderemos pronto.");
        formContacto.reset();
    });
});