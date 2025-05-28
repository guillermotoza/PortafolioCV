
// Toggle menú móvil
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_j1ozqcb", "template_veooznj", this)
    .then(function() {
      alert("¡Mensaje enviado con éxito!");
    }, function(error) {
      alert("Ocurrió un error. Intenta más tarde.");
      console.log(error);
    });

  this.reset();
});

// Mostrar u ocultar el botón cuando haces scroll
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scroll-top-btn");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Al hacer clic, sube suavemente al top
document.getElementById("scroll-top-btn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Animaciones con ScrollReveal
ScrollReveal().reveal('#sobre-mi', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('#habilidades', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 400
});

ScrollReveal().reveal('#proyectos', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 600
});

ScrollReveal().reveal('#contacto', {
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 800
});

// Toggle modo oscuro
const toggle = document.getElementById("modo-oscuro-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Guarda preferencia en localStorage
  const modoOscuroActivo = document.body.classList.contains("dark-mode");
  localStorage.setItem("modoOscuro", modoOscuroActivo);
});

// Carga modo oscuro si ya estaba activado antes
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("dark-mode");
  }
});

ScrollReveal().reveal('#experiencia .timeline-item', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  interval: 200
});
