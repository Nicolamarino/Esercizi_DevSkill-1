let risultato: string = "";
let inputA: string = prompt("Inserisci una parola");
let inputB: string = prompt("Inserisci una parola");

if (inputA.length != inputB.length) {
    console.log("Le parole non hanno la stessa lunghezza")
} else {
    for (let i = 0; i < inputA.length; i++) {
        if (i % 2 == 0) {
            let temp = inputA.charAt(i);
            risultato = risultato.concat(temp);
        } else {
            let temp = inputB.charAt(i);
            risultato = risultato.concat( temp);
        }
        console.log(risultato);
    }
}
