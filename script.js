document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseMessage = document.getElementById('responseMessage');
    const countdownTimer = document.getElementById('countdownTimer');

    // Countdown Timer
    const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            countdownTimer.innerHTML = "The time is up!";
            clearInterval(countdownInterval);
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Button Click Events
    yesButton.addEventListener('click', () => {
        window.location.href = "thankyou.html"; // Redirect to Thank You page
    });

    noButton.addEventListener('click', () => {
        window.location.href = "thankyou.html"; // Redirect to Thank You page
    });

    // Hover effect for the decline button
    noButton.addEventListener('mouseover', () => {
        noButton.classList.add('swap');
    });

    noButton.addEventListener('mouseout', () => {
        noButton.classList.remove('swap');
    });
});
