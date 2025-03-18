document.addEventListener("DOMContentLoaded", function () {
    console.log("Tienda de cuero cargada correctamente!");
    
    // Agregar efecto de scroll en productos
    const productos = document.querySelectorAll(".producto");
    productos.forEach(producto => {
        producto.addEventListener("mouseenter", () => {
            producto.style.transform = "scale(1.1)";
        });
        producto.addEventListener("mouseleave", () => {
            producto.style.transform = "scale(1)";
        });
    });
});
