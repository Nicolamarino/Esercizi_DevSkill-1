function leggiInput(){
    return +prompt("Inserisci un numero, -1 per uscire");
}
let n: number = +prompt("Inserisci il numero da confrontare");
let numeri: number=0;
let sequenza: number[] = [];
let controllo: number = 0;

while (numeri != -1) {
    numeri = leggiInput();
    sequenza.push(numeri);
    
}
console.log(sequenza);
for (let i = 0; i < sequenza.length; i++) {
    if (sequenza[i] <= n && sequenza[i + 1] <= n) {
        controllo++
    }
}
console.log(controllo)
if (controllo == n) {
    console.log("OK");
} else {
    console.log("NO");
}