document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("lista-carrito");
    const btnComprar = document.getElementById("btn-comprar");

    btnComprar.addEventListener("click", function () {
        alert("¡Gracias por tu compra! Pronto te contactaremos.");
        carrito.innerHTML = "<p>Tu carrito está vacío</p>";
    });
});
