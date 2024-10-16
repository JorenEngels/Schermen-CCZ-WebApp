// Functie om een bestand van GitHub te laden en weer te geven
async function loadGitHubFile(fileName, elementId) {
    const repo = 'JorenEngels/Schermen-CCZ-WebApp';
    const branch = 'main';
    const url = `https://raw.githubusercontent.com/${repo}/${branch}/${fileName}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerText = content;
        } else {
            console.error(`Fout bij het laden van ${fileName}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching file ${fileName}:`, error);
    }
}

// Functie om alle relevante bestanden op te halen en te tonen
function loadAllFiles() {
    // Haal elk bestand op en toon het in het juiste HTML-element
    loadGitHubFile('Date1.txt', 'date1');
    loadGitHubFile('Meal1.txt', 'meal1');
    loadGitHubFile('Naam1.txt', 'eventName1');
    loadGitHubFile('Starttime1.txt', 'startTime1');
    loadGitHubFile('Time1.txt', 'time1');
    loadGitHubFile('TimeSchedule1.txt', 'timeSchedule1');
    loadGitHubFile('Publieksaantal1.txt', 'publicAmount1');

    // Als er meer bestanden zijn, kun je deze hier toevoegen (bijv. Date2.txt, enz.)
}

// Roep de functie aan wanneer de pagina wordt geladen
window.onload = loadAllFiles;
