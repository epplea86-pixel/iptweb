// =============================
// SCRIPT DE NAVEGACIÓN RESPONSIVA
// =============================

// Seleccionamos los elementos del menú
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Alternar menú en móviles
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
