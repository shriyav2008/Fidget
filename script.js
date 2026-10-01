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

// Bubble Wrap
const bubbleWrap = document.getElementById('bubbleWrap');
for (let i = 0; i < 25; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('wrap-bubble');
    bubble.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!bubble.classList.contains('burst')) {
            bubble.classList.add('burst');
            playPop();
        }
    });
    bubbleWrap.appendChild(bubble);
}

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
        document.querySelectorAll('.bubble, .wrap-bubble').forEach(b => b.classList.remove('popped', 'burst'));
    }
});
