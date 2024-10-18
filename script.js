// Tekstbestanden correct koppelen
async function loadText(filename, elementId) {
    try {
        let response = await fetch(filename);
        let text = await response.text();
        document.getElementById(elementId).innerText = text;
    } catch (error) {
        document.getElementById(elementId).innerText = 'Geen informatie';
    }
}

// Correcte tekstbestanden koppelen
loadText('Date1.txt', 'datum');
loadText('Meal1.txt', 'maaltijd');
loadText('Naam1.txt', 'naam');
loadText('Starttime1.txt', 'starttijd');
loadText('Time1.txt', 'tijd');
loadText('TimeSchedule1.txt', 'tijdschaal');
loadText('Publieksaantal1.txt', 'publieksaantal');

// Afbeelding correct plaatsen
document.getElementById('image').src = 'Image1.jpg';
