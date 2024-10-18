// Functie om tekstbestanden in te laden
function loadTextFile(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Bestand niet gevonden: ' + filePath);
            }
        })
        .then(text => {
            document.getElementById(elementId).innerText = text;
        })
        .catch(error => {
            console.error('Fout bij het laden van bestand:', error);
            document.getElementById(elementId).innerText = "Geen informatie beschikbaar.";
        });
}

// Gegevens inladen uit de tekstbestanden
window.onload = function() {
    loadTextFile('datum', 'Date1.txt');
    loadTextFile('maaltijd', 'Meal1.txt');
    loadTextFile('naam', 'Naam1.txt');
    loadTextFile('starttijd', 'Starttime1.txt');
    loadTextFile('tijd', 'Time1.txt');
    loadTextFile('tijdschaal', 'TimeSchedule1.txt');
    loadTextFile('publieksaantal', 'Publieksaantal1.txt');

    // De afbeelding dynamisch inladen
    const imageElement = document.getElementById('event-image');
    fetch('Image1.jpg')
        .then(response => {
            if (response.ok) {
                imageElement.src = 'Image1.jpg';
            } else {
                throw new Error('Afbeelding niet gevonden');
            }
        })
        .catch(error => {
            console.error('Fout bij het laden van de afbeelding:', error);
            imageElement.alt = "Geen afbeelding beschikbaar";
        });
};
