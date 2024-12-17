const earth = document.getElementById('earth');
const simulateButton = document.getElementById('simulate');
const valueDisplay = document.getElementById('value');
const statusDisplay = document.getElementById('status');
// Sound elements
const calmSound = document.getElementById('calm-sound');
const mediumSound = document.getElementById('medium-sound');
const alertSound = document.getElementById('alert-sound');
const alert1 = document.getElementById('alert');



simulateButton.addEventListener('click', () => {
    // Generate a random earthquake magnitude
    let magnitude = (Math.random() * 10).toFixed(1); // Value between 0 and 10
    valueDisplay.textContent = magnitude;
  // Stop all sounds before playing the correct one
  calmSound.pause();
  mediumSound.pause();
  alertSound.pause();
  alert1.pause();
  calmSound.currentTime = 0;
  mediumSound.currentTime = 0;
  alertSound.currentTime = 0;
  alert1.currentTime = 0;

    // Update state based on magnitude
    if (magnitude < 3) {
        statusDisplay.textContent = 'الحالة: الأرض هادئة 🟢';
        statusDisplay.style.color = 'green';
        earth.style.animation = 'none';
        earth.style.backgroundImage = `url('images/th (4).jpeg')`;
        calmSound.play();
    } else if (magnitude >= 3 && magnitude <= 6) {
        statusDisplay.textContent = '⚠️ الحالة: اهتزاز متوسط ⚠️';
        statusDisplay.style.color = 'orange';
        earth.style.animation = 'shake 0.5s infinite';
        earth.style.backgroundImage = `url('images/th (1).jpeg')`;
        mediumSound.play();
    } else {
        statusDisplay.textContent = '🚨 تحذير: زلزال قوي 🚨';
        statusDisplay.style.color = 'red';
        earth.style.animation = 'shake 0.1s infinite';
        earth.style.backgroundImage = `url('images/th (5).jpeg')`;
        alert1.play();
        alertSound.play();

       
        alert('⚠️ تحذير: زلزال قوي! ابتعد عن المباني والأماكن الخطرة!');
    }
});
