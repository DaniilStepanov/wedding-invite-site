const countdown = document.getElementById("countdown");
const weddingDate = new Date("July 12, 2025 15:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        countdown.innerHTML = "🎉 Свадьба уже состоялась!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}, 1000);