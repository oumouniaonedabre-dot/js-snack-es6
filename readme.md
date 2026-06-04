@here
Ciao Ragazzi,
Esercizio di oggi: Snack Array e Oggetti
cartella/repo: js-snack-es6

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const bikes = [
  { nome: 'Bianchi', peso: 7.2 },
  { nome: 'Trek', peso: 6.8 },
  { nome: 'Specialized', peso: 7.0 },
  { nome: 'Cannondale', peso: 6.5 }
];

let minWeight = bikes[0].peso;
let lightestBikeName = bikes[0].nome;

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].peso < minWeight) {
    minWeight = bikes[i].peso;
    lightestBikeName = bikes[i].nome;
  }
}

document.getElementById('bike-result').innerHTML = `
  <p>La bici più leggera è <strong>${lightestBikeName}</strong></p>
  <p>Peso: ${minWeight} kg</p>
`;





// Snack 2
const teams = [
  { nome: 'Milan', punti: 0, falli: 0 },
  { nome: 'Inter', punti: 0, falli: 0 },
  { nome: 'Juventus', punti: 0, falli: 0 },
  { nome: 'Roma', punti: 0, falli: 0 }
];

const teamsList = document.getElementById('teams-list');
const foulsList = document.getElementById('fouls-list');

const bonusArray = [];

for (let i = 0; i < teams.length; i++) {
  teams[i].punti = Math.floor(Math.random() * 100);
  teams[i].falli = Math.floor(Math.random() * 50);

  // Stampa completa
  teamsList.innerHTML += `
    <li>
      <strong>${teams[i].nome}</strong> –
      Punti: ${teams[i].punti},
      Falli: ${teams[i].falli}
    </li>
  `;

  // BONUS: nuovo oggetto
  bonusArray.push({
    nome: teams[i].nome,
    falli: teams[i].falli
  });
}

// Stampa BONUS
for (let i = 0; i < bonusArray.length; i++) {
  foulsList.innerHTML += `
    <li>
      ${bonusArray[i].nome} – Falli subiti: ${bonusArray[i].falli}
    </li>
  `;
}


<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Snack ES6</title>
</head>
<body>

  <h1>Snack 1</h1>
  <div id="bike-result"></div>

  <hr>

  <h1>Snack 2</h1>
<ul id="teams-list"></ul>

<h2>Bonus</h2>
<ul id="fouls-list"></ul>

  <script src="script.js"></script>
</body>
</html>