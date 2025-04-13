// Música play/pause
const musicButton = document.getElementById('musicButton');
const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

// Verificar se a música deve estar tocando ou pausada
window.addEventListener('load', () => {
  const musicState = localStorage.getItem('musicState');
  if (musicState === 'playing') {
    backgroundMusic.play();
    playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png';  // Mude a imagem para "pause"
  } else {
    backgroundMusic.pause();
    playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png';  // Mude a imagem para "play"
  }
});

if (musicButton && playPauseBtn && backgroundMusic) {
  musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      localStorage.setItem('musicState', 'playing'); // Salva que a música está tocando
      playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png';  // Mude a imagem para "pause"
    } else {
      backgroundMusic.pause();
      localStorage.setItem('musicState', 'paused'); // Salva que a música foi pausada
      playPauseBtn.src = 'imagens/botao_musica_sem_fundo.png';  // Mude a imagem para "play"
    }
  });
}
