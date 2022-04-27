function controllo(numeroCorrente: number, max: number): number {
    array.push(input)
    if (numeroCorrente > max) {
        max = numeroCorrente;
    }
    return max
}

let input: number = prompt("inserisci un valore ") * 1;
let c: number = input;
let array: number[] = [];



for (let i = 0; i < 10; i++) {
    c = controllo(input, c);
    input = prompt("inserisci un valore ") * 1;
}
console.log(array);
console.log(c);

