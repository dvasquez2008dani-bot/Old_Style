const botones = document.querySelectorAll(".add-cart");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Producto agregado al carrito con éxito");
  });
});
