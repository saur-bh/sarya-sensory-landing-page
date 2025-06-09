// Initialize Lucide icons
lucide.createIcons();

// Timer variables
let countdown = 5;
let isTimerActive = true;
let timer = null;

// Start timer when page loads
function startTimer() {
    if (!isTimerActive) return;

    timer = setInterval(() => {
        countdown--;
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = `${countdown}s`;
        }

        if (countdown <= 0) {
            window.location.href = 'https://thesarya.com';
        }
    }, 1000);
}

// Handle redirect button click
function handleRedirect() {
    window.location.href = 'https://thesarya.com';
}

// Stop timer and show stopped message
function stopTimer() {
    isTimerActive = false;
    if (timer) {
        clearInterval(timer);
    }
    const timerSection = document.getElementById('timer-section');
    const stoppedSection = document.getElementById('stopped-section');
    if (timerSection && stoppedSection) {
        timerSection.style.display = 'none';
        stoppedSection.style.display = 'block';
    }
}

// Start timer when page loads
document.addEventListener('DOMContentLoaded', startTimer); 