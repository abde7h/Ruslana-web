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

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.onscroll = function() {
  // Show the arrow button when the user scrolls down
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.arrow-container').style.display = 'block';
  } else {
      document.querySelector('.arrow-container').style.display = 'none';
  }
};
