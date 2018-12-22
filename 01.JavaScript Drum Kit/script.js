function playAudio(code) {
  console.log(code);
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`div[data-key="${code}"]`);
  if (!audio) return;
  if (!key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

document.querySelectorAll(`.key`).forEach(key => key.addEventListener('transitionend', e => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
}));

document.querySelectorAll(`.key`).forEach(key => key.addEventListener('click', e => {
  let code = e.target.dataset.key;
  code = (code) ? code : e.target.parentElement.dataset.key;
  playAudio(code);
}));

window.addEventListener('keydown', e => {
  playAudio(e.code);
});
