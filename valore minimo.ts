function controllo(numeroCorrente: number, min: number):number {
    
    if (numeroCorrente < min) {
        min = numeroCorrente;
    }
    return min
}

let input: number = prompt("inserisci un valore \n -1 per uscire") * 1;
let c: number = input;



if (input === -1) {
    console.log("Arriverci")
}
else {
    while (input != -1) {
        c = controllo(input, c);
        input = prompt("inserisci un valore \n -1 per uscire") * 1;
    }
   
    console.log(c);
}