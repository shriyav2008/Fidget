// Spinner
const spinner = document.getElementById('spinner');
spinner.addEventListener('click', function() {
    spinner.classList.add('spinning');
    setTimeout(() => {
        spinner.classList.remove('spinning');
    }, 2000);
});

// Pop It
const popIt = document.getElementById('popIt');
for (let i = 0; i < 16; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.addEventListener('click', function(e) {
        e.stopPropagation();
        bubble.classList.toggle('popped');
    });
    popIt.appendChild(bubble);
}

// Floating Balloon
const balloonContainer = document.getElementById('balloonContainer');
const balloonColors = ['red', 'yellow', 'green', 'blue', 'pink', 'purple', 'orange'];

function createAllBalloons() {
  balloonContainer.innerHTML = '';
  balloonColors.forEach((color, index) => {
    const balloon = document.createElement('div');
    balloon.className = `floating-balloon ${color}`;
    
    balloon.addEventListener('click', function(e) {
      e.stopPropagation();
      balloon.classList.add('popped');
      playPop();
      setTimeout(() => {
        createAllBalloons();
      }, 500);
    });
    
    balloonContainer.appendChild(balloon);
  });
}

// Create all balloons on load
createAllBalloons();


// Clicker
let clickCount = 0;
const clicker = document.getElementById('clicker');
const clickCountDisplay = document.getElementById('clickCount');
clicker.addEventListener('click', function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

// Simple pop sound effect (using Web Audio API)
function playPop() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Reset button (optional)
document.addEventListener('keydown', function(e) {
    if (e.key === 'r') {
        clickCount = 0;
        clickCountDisplay.textContent = '0';
        document.querySelectorAll('.bubble').forEach(b => b.classList.remove('popped'));
        document.querySelectorAll('.floating-balloon').forEach(b => b.remove());
        createBalloon();
    }
});
