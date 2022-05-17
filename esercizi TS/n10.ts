function reverse(input: string) {
    let dividiStringa = input.split("");
    let invertiArray = dividiStringa.reverse();
    let nInv = invertiArray.join("");

    return nInv
}
function leggiInput() {
    return prompt("Inserisci un numero");
}
function sottrazione(n: string, nInv: string) {
    n = +input;
    nInv = +nInv;
    let risultato = n - nInv;
    return risultato
}
let input: string = leggiInput();
let nInv:string = reverse(input);
console.log(sottrazione(input, nInv))