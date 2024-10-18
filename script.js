window.onload = function() {
    // Ophalen van de tekstbestanden en invullen in de HTML elementen
    fetch('./Date1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('datum').innerText = data;
        });

    fetch('./Meal1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('maaltijd').innerText = data;
        });

    fetch('./Naam1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('naam').innerText = data;
        });

    fetch('./Starttime1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('starttijd').innerText = data;
        });

    fetch('./Time1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tijd').innerText = data;
        });

    fetch('./TimeSchedule1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tijdschaal').innerText = data;
        });

    fetch('./Publieksaantal1.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publieksaantal').innerText = data;
        });
};
