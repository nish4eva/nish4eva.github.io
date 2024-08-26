const messages = document.querySelectorAll('.message');
const ring = document.querySelector('.ring');
const fireworks = document.querySelector('.fireworks');
const header = document.querySelector('.fixed-header');

let currentMessageIndex = 0;

function showMessage(index) {
    messages.forEach((msg, i) => {
        if (i === index) {
            msg.style.opacity = '1';
        } else if (i < index) {
            msg.style.opacity = '0.3';
        } else {
            msg.style.opacity = '0';
        }
    });

    if (index === messages.length) {
        ring.style.opacity = '1';
        fireworks.style.opacity = '1';
    }
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const step = window.innerHeight / messages.length;
    currentMessageIndex = Math.min(Math.floor(scrollY / step), messages.length);

    if (currentMessageIndex >= 1) {
        header.classList.add('hidden');
    }

    showMessage(currentMessageIndex);
});
