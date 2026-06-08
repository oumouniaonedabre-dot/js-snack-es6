// Snack 1
const bikes = [
  { nome: 'Bianchi', peso: 7.2 },
  { nome: 'Trek', peso: 6.8 },
  { nome: 'Specialized', peso: 7.0 },
  { nome: 'Cannondale', peso: 6.5 }
];

const lightestBike = bikes.reduce((min, bike) => bike.peso < min.peso ? bike : min);

document.getElementById('bike-result').innerHTML = `
  <p>La bici più leggera è <strong>${lightestBike.nome}</strong></p>
  <p>Peso: ${lightestBike.peso} kg</p>
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

const bonusArray = teams.map(team => {
  team.punti = Math.floor(Math.random() * 100);
  team.falli = Math.floor(Math.random() * 50);

  teamsList.innerHTML += `<li><strong>${team.nome}</strong>  Punti: ${team.punti}, Falli: ${team.falli}</li>`;

  return { nome: team.nome, falli: team.falli };
});

bonusArray.forEach(team => {
  foulsList.innerHTML += `<li>${team.nome}  Falli subiti: ${team.falli}</li>`;
});