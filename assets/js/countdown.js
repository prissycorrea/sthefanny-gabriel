// Defina a data do casamento
const weddingDate = new Date("2024-12-15T00:00:00").getTime();

// Atualize o contador a cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calcule o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualize os elementos de tempo
    document.getElementById("days").querySelector(".time-number").innerHTML = days;
    document.getElementById("hours").querySelector(".time-number").innerHTML = hours;
    document.getElementById("minutes").querySelector(".time-number").innerHTML = minutes;
    document.getElementById("seconds").querySelector(".time-number").innerHTML = seconds;

    // Verifique se a data do casamento chegou ou passou
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdownMessage").innerHTML = "Enfim, casados!";
        document.querySelector(".countdown-clock").style.display = "none"; // Oculta o relógio
    } else if (days === 0) {
        document.getElementById("countdownMessage").innerHTML = "É hoje!";
    }
}, 1000);
