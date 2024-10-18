document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Date1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('datum').textContent = data);

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Meal1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('maaltijd').textContent = data);

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Naam1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('naam').textContent = data);

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Starttime1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('starttijd').textContent = data);

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Time1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('tijd').textContent = data);

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/TimeSchedule1.txt')
        .then(response => response.text())
        .then(data => {
            const timeScheduleElement = document.getElementById('tijdschaal');
            const timeScheduleLines = data.split('\n');
            timeScheduleLines.forEach(line => {
                const lineElement = document.createElement('p');
                lineElement.classList.add('schedule-line');  // Gebruik dezelfde stijl
                lineElement.textContent = line;
                timeScheduleElement.appendChild(lineElement);
            });
        });

    fetch('https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Publieksaantal1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('publieksaantal').textContent = data);

    // Voeg de afbeelding dynamisch toe
    document.getElementById('event-image').src = 'https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/Image1.jpg';
});
