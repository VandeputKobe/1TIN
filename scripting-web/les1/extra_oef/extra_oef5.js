const prompt = require('prompt-sync')();

let d12 = parseFloat(prompt("Geef de afstand tussen punt 1 en 2:"));
let d13 = parseFloat(prompt("Geef de afstand tussen punt 1 en 3:"));
let d14 = parseFloat(prompt("Geef de afstand tussen punt 1 en 4:"));

let breedtePlank = parseFloat(prompt("Geef de breedte van de plank:"));
let breedteAfgesnedenPlank = parseFloat(prompt("Geef de breedte van de afgesneden plank in punt 1:"));

let snedePunt2 = (d12 - breedteAfgesnedenPlank) % breedtePlank;
let snedePunt3 = (d13 - breedteAfgesnedenPlank) % breedtePlank;
let snedePunt4 = (d14 - breedteAfgesnedenPlank) % breedtePlank;

console.log("Snede op punt 2:" + snedePunt2);
console.log("Snede op punt 3:" + snedePunt3);
console.log("Snede op punt 4:" + snedePunt4);