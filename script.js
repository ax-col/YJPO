function startTimer() {
    const startDate = new Date("2019-02-05T06:00:00"); // Fecha de inicio: 05/02/2019
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateTimer() {
        const now = new Date();
        const elapsedTime = Math.floor((now - startDate) / 1000); // Tiempo en segundos desde la fecha de inicio

        let days = Math.floor(elapsedTime / 86400);
        let hours = Math.floor((elapsedTime % 86400) / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateTimer, 1000); // Actualiza cada segundo
}

window.onload = startTimer;
