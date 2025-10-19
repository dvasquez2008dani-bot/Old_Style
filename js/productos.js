// --- CARRUSEL ---
let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
  const slides = document.getElementsByClassName("carousel-slide");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 5000); // cambia cada 5 seg
}

function cambiarSlide(n) {
  slideIndex += n - 1;
  mostrarSlides();
}

// 🔍 Búsqueda funcional
document.getElementById("search-btn").addEventListener("click", () => {
  const input = document.getElementById("search-input").value.toLowerCase();
  const productos = document.querySelectorAll(".producto");
  productos.forEach(p => {
    const nombre = p.querySelector("h3").textContent.toLowerCase();
    p.style.display = nombre.includes(input) ? "block" : "none";
  });
});

// 🛒 Carrito funcional
let cart = [];
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Agregar al carrito
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", e => {
    const product = e.target.closest(".producto");
    const nombre = product.dataset.nombre;
    const precio = parseFloat(product.dataset.precio);

    cart.push({ nombre, precio });
    updateCart();
  });
});

// Mostrar carrito
document.getElementById("cart-icon").addEventListener("click", () => {
  cartModal.style.display = "flex";
});

// Cerrar carrito
document.getElementById("close-cart").addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Actualizar carrito
function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.precio;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Finalizar compra
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Tu carrito está vacío 🛒");
    return;
  }
  alert("¡Gracias por tu compra! 💖");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});

//casusel numero 2.0
const carusel = document.getElementById("carusel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  carusel.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  carusel.scrollBy({ left: -300, behavior: "smooth" });
});
