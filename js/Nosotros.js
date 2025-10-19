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

document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición suave para el mapa y el texto
  const mapa = document.querySelector(".mapa iframe");
  const titulo = document.querySelector(".ubicacion h2");
  const subtitulo = document.querySelector(".ubicacion h3");
  const iconos = document.querySelectorAll(".icono");

  // Añadir animación inicial
  [titulo, mapa, subtitulo].forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 * i);
  });

  // Efecto al pasar el mouse por los íconos
  iconos.forEach(icono => {
    icono.addEventListener("mouseenter", () => {
      icono.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      icono.style.transform = "rotate(10deg) scale(1.2)";
      icono.style.boxShadow = "0 0 20px rgba(255,255,255,0.5)";
    });

    icono.addEventListener("mouseleave", () => {
      icono.style.transform = "rotate(0deg) scale(1)";
      icono.style.boxShadow = "none";
    });

    // Mensaje al hacer clic
    icono.addEventListener("click", e => {
      e.preventDefault();
      const red = icono.classList.contains("instagram")
        ? "Instagram"
        : icono.classList.contains("facebook")
        ? "Facebook"
        : icono.classList.contains("twitter")
        ? "Twitter"
        : "TikTok";

      alert(`Abriendo ${red}...`);
    });
  });
});
