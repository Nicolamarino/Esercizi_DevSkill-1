function controllo(numeroCorrente: number, max: number):number {
    array.push(input)
    if (numeroCorrente > max) {
        max = numeroCorrente;
    }
    return max
}

let input: number = prompt("inserisci un valore \n -1 per uscire") * 1;
let c: number = input;
let array: number[] = [];


if (input === -1) {
    console.log("Arriverci")
}
else {
    while (input != -1) {
        c = controllo(input, c);
        input = prompt("inserisci un valore \n -1 per uscire") * 1;
    }
    console.log(array);
    console.log(c);
}


