// Dummy data om te testen
const evenementen = [
    {
        name: 'Lassie: Een Nieuw Avontuur',
        starttime: '2024-10-13T15:00:00+02:00',
        endtime: '2024-10-13T16:40:00+02:00',
        warme_maaltijd: 'Geen warme maaltijd informatie'
    },
    {
        name: 'The Healing',
        starttime: '2024-10-13T20:00:00+02:00',
        endtime: '2024-10-13T21:40:00+02:00',
        warme_maaltijd: '18:10'
    }
];

// Functie om de tijd netjes weer te geven
function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);
    const formattedDate = date.toLocaleDateString('nl-BE');
    const formattedTime = date.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });
    return `Datum: ${formattedDate} // Tijd: ${formattedTime}`;
}

// Functie om de evenementeninformatie weer te geven
function displayEvents(events) {
    const eventInfoDiv = document.getElementById('event-info');

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        const eventName = document.createElement('h2');
        eventName.textContent = `Evenement: ${event.name}`;
        eventDiv.appendChild(eventName);

        const startTime = document.createElement('p');
        startTime.textContent = `Starttijd: ${formatDateTime(event.starttime)}`;
        eventDiv.appendChild(startTime);

        const endTime = document.createElement('p');
        endTime.textContent = `Eindtijd: ${formatDateTime(event.endtime)}`;
        eventDiv.appendChild(endTime);

        const warmeMaaltijd = document.createElement('p');
        warmeMaaltijd.textContent = `Warme maaltijd: ${event.warme_maaltijd}`;
        eventDiv.appendChild(warmeMaaltijd);

        eventInfoDiv.appendChild(eventDiv);
    });
}

// Evenementen weergeven op de pagina
displayEvents(evenementen);
