document.addEventListener("DOMContentLoaded", function() {
    var typingAnimation = document.querySelector('.typing-animation');
    var textToType = typingAnimation.innerText;
    typingAnimation.innerText = '';
    var charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingAnimation.innerText += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, Math.random() * 200 + 100);
        } else {
            setTimeout(restartAnimation, 5000);
        }
    }

    function restartAnimation() {
        typingAnimation.innerText = '';
        charIndex = 0;
        typeText();
    }

    typeText();
});
