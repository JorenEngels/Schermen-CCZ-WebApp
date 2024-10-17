// Functie om tekstbestanden op te halen en hun inhoud te tonen
function fetchData(filename, elementId) {
    const url = `https://raw.githubusercontent.com/JorenEngels/Schermen-CCZ-WebApp/main/${filename}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fout bij het ophalen van ${filename}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerText = data;
        })
        .catch(error => {
            console.error('Er is een fout opgetreden:', error);
            document.getElementById(elementId).innerText = 'Fout bij laden';
        });
}

// Alle bestanden laden bij het laden van de pagina
document.addEventListener("DOMContentLoaded", function() {
    fetchData('Date1.txt', 'datum');
    fetchData('Meal1.txt', 'maaltijd');
    fetchData('Naam1.txt', 'naam');
    fetchData('Starttime1.txt', 'starttijd');
    fetchData('Time1.txt', 'tijd');
    fetchData('TimeSchedule1.txt', 'tijdschaal');
    fetchData('Publieksaantal1.txt', 'publieksaantal');
});
