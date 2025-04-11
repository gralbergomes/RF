// Música play/pause
const musicButton = document.getElementById('musicButton');
const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png'; // Aqui pode mudar para um botão "pause" se quiser
  } else {
    backgroundMusic.pause();
    playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png'; // Mesma imagem para pausar
  }
});

// Particles.js (inicialização simples)
tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#a259ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 100 }
    }
  }
});

// Scroll Reveal
ScrollReveal().reveal('.hero__logo, .hero__title, .hero__subtitle, .button-group, .music-container', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  reset: false
});

// Menu Hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Animação do botão hambúrguer (opcional)
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
});


// Contador Regressivo
const countdown = document.getElementById('countdown');

// Define a data alvo (exemplo: 1º de Maio de 2025, 00:00)
const targetDate = new Date('2025-05-09T20:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Lançado!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
