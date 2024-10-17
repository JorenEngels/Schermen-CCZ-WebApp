async function loadGitHubFile(fileName, elementId) {
    const repo = 'JorenEngels/Schermen-CCZ-WebApp';
    const branch = 'main';
    const url = `https://raw.githubusercontent.com/${repo}/${branch}/${fileName}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerText = content;
            console.log(`Bestand geladen: ${fileName}`);
        } else {
            console.error(`Fout bij het laden van ${fileName}: ${response.status}`);
            document.getElementById(elementId).innerText = `Fout bij het laden van ${fileName}`;
        }
    } catch (error) {
        console.error(`Error fetching file ${fileName}:`, error);
        document.getElementById(elementId).innerText = `Error fetching ${fileName}`;
    }
}

// Deze functies laden de specifieke bestanden van GitHub en voegen ze toe aan de HTML-elementen.
function loadEventDetails() {
    loadGitHubFile('Date1.txt', 'date1');
    loadGitHubFile('Meal1.txt', 'meal1');
    loadGitHubFile('Naam1.txt', 'name1');
    loadGitHubFile('Starttime1.txt', 'starttime1');
    loadGitHubFile('Time1.txt', 'time1');
    loadGitHubFile('TimeSchedule1.txt', 'timeschedule1');
    loadGitHubFile('Publieksaantal1.txt', 'publieksaantal1');
}

// Zodra de pagina is geladen, roep de functie op om de gegevens te laden.
window.onload = loadEventDetails;
