let input: number = +prompt("Inserisci un numero intero");
let interi: number[] = [];
let risultato: number;
let controllo1: boolean = false;
let controllo2: boolean = false;


while (input != -1) {
    interi.push(input);
    input = +prompt("Inserisci un numero intero");
}
if (interi.length != 0) {
    for (let i = 0; i < interi.length; i++) {
        if (!(interi[i] >= 0 && interi[i] <= 9)) {
            controllo1 = true;
            break;
        }
    }
}else{
    controllo2=true;
}
risultato = +interi.join("");
if (controllo1 == true) {
    console.log("Errore")
} else if (controllo2 == true) {
    console.log("VUOTO")
} else {
    if (risultato % 3 == 0) {
        console.log("\n"+risultato + " \n Si");
    } else {
        console.log("\n"+risultato + "\n No");
    }
}