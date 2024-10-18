window.onload = function() {
    fetch('Date1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('datum').textContent = data);

    fetch('Meal1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('maaltijd').textContent = data);

    fetch('Naam1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('naam').textContent = data);

    fetch('Starttime1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('starttijd').textContent = data);

    fetch('Time1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('tijd').textContent = data);

    fetch('TimeSchedule1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('tijdschaal').textContent = data);

    fetch('Publieksaantal1.txt')
        .then(response => response.text())
        .then(data => document.getElementById('publieksaantal').textContent = data);
};
