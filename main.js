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