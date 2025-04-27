const weddingDate = new Date("July 27, 2025 16:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        // Если дата уже прошла
        document.querySelector('[data-timer-day-value]').textContent = "0";
        document.querySelector('[data-timer-hours-value]').textContent = "0";
        document.querySelector('[data-timer-minutes-value]').textContent = "0";
        document.querySelector('[data-timer-seconds-value]').textContent = "0";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // Обновляем значения в HTML
    document.querySelector('[data-timer-day-value]').textContent = days;
    document.querySelector('[data-timer-hours-value]').textContent = hours;
    document.querySelector('[data-timer-minutes-value]').textContent = minutes;
    document.querySelector('[data-timer-seconds-value]').textContent = seconds;

}, 1000);
