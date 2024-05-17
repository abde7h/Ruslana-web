var backgroundAudio = document.getElementById("backgroundAudio");
var muteIcon = document.getElementById("muteIcon");

function toggleMute() {
  if (backgroundAudio.muted) {
    backgroundAudio.muted = false;
    // Cambiar el icono a unmute
    muteIcon.classList.remove("fa-volume-xmark");
    muteIcon.classList.add("fa-volume-high");
  } else {
    backgroundAudio.muted = true;
    // Cambiar el icono a mute
    muteIcon.classList.remove("fa-volume-high");
    muteIcon.classList.add("fa-volume-xmark");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollArrows = document.querySelectorAll('.scroll-arrow');
  
  // Función para mostrar/ocultar flechas según la posición de desplazamiento
  function toggleScrollArrows() {
    const mainSection = document.querySelector('main');
    const footerSection = document.querySelector('footer');
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Mostrar flecha para bajar solo en la página principal
    if (mainSection.getBoundingClientRect().top > 0) {
      scrollArrows.forEach(arrow => {
        if (arrow.classList.contains('down-arrow')) {
          arrow.style.display = 'block';
        } else {
          arrow.style.display = 'none';
        }
      });
    }
    
    // Mostrar flecha para subir solo en el footer
    if (footerSection.getBoundingClientRect().top > window.innerHeight) {
      scrollArrows.forEach(arrow => {
        if (arrow.classList.contains('up-arrow')) {
          arrow.style.display = 'block';
        } else {
          arrow.style.display = 'none';
        }
      });
    }
  }
  
  // Evento de desplazamiento para controlar las flechas
  window.addEventListener('scroll', toggleScrollArrows);
});
