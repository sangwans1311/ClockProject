let is24Hour = true;
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const toggleFormatButton = document.getElementById('toggleFormat');
const toggleThemeButton = document.getElementById('toggleTheme');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = now.toLocaleDateString();

    if (!is24Hour) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        clockElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    } else {
        clockElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    dateElement.textContent = date;
}

toggleFormatButton.addEventListener('click', () => {
    is24Hour = !is24Hour;
    toggleFormatButton.textContent = is24Hour ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
});

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    toggleThemeButton.textContent = document.body.classList.contains('light') ? 'Switch to Dark Theme' : 'Switch to Light Theme';
});

setInterval(updateClock, 1000);
updateClock(); // initial call to set the clock immediately
