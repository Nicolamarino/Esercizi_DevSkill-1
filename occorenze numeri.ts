let input: number = prompt("inserisci un numero") * 1;
let array: number[] = [];

while (input != -1) {
    array.push(input);
    input = prompt("inserisci un nuovo numero") * 1;
}

const occorrenza: string = {};

for (const element of array) {
    if (occorrenza[element]) {
        occorrenza[element]++;
    } else {
        occorrenza[element] = 1;
    }
}
console.log(array);
console.log(occorrenza);