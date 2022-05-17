function leggiInput() {
    return +prompt("inserisci un numero intero");
}
function risposta(divisore: number, intero: number): boolean {
    if (intero % divisore === 0) {
        messaggio = true;
        console.log(messaggio);
    } else {
        messaggio = false;
        console.log(messaggio);
    }
    return messaggio
}
let divisore: number = +prompt("Inserisci un divisore intero");
let intero: number;
let interi: number[] = [];
let messaggio;

for(let i=0;i<10;i++){
    intero = leggiInput();
    interi.push(intero);
}
for (let i = 0; i < interi.length; i++) {
    risposta(divisore, interi[i]);
    if(messaggio==true){
        break;
    }
}

if (messaggio == true) {
    console.log("NO");
} else {
    console.log("OK")
}