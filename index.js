 function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.keys__key[data-key="${e.keyCode}"]`);
     if (!audio) return
     audio.currentTime = 0;
     audio.play();
     key.classList.add('playing');
 }

 function removeTransform(e) {
     if (e.propertyName != 'transform') return;
     e.target.classList.remove('playing');
 }

 window.addEventListener('keydown', playSound);
 const keys = document.querySelectorAll('.keys__key');
 keys.forEach(key => key.addEventListener('transitionend', removeTransform))