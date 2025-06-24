console.log("Shrikha's Portfolio!");
const navLinks = document.querySelectorAll('nav a');

const hoverSound = new Audio('game-start-6104 (1).mp3');
hoverSound.preload = 'auto';

// Add event listener for hover
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.play(); // Play the sound when hovering
    });
});