const prompt = require('prompt-sync')();

const min = Number(prompt('enter een min: '));
const max = Number(prompt('enter een max: '));
const stap = Number(prompt('enter een stapgrootte: '));

console.log(maakRij(min, max, stap));

function maakRij(min, max, stap) {
    let lijst = [];

    if (stap === 0) {
        console.log("stapgrootte mag geen 0 zijn");
        return lijst;
    }

    if (stap > 0) {
        for (let i = min; i <= max; i += stap) {
            lijst.push(i);
        }
    } else {
        for (let i = min; i >= max; i += stap) {
            lijst.push(i);
        }
    }

    return lijst;
}
