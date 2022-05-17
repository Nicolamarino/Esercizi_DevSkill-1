function leggiInput() {
  return +prompt("Inserisci un numero della serie");

}
let x: number = +prompt("Inserisci un intero di controllo");
let lunghezza: number = +prompt("Inserisci la lunghezza della serie");
let interi: number[] = [];
let numero: number;
let risultato: number[] = [];


for (let i = 0; i < lunghezza; i++) {
  numero = leggiInput();
  interi.push(numero);
}
for (let i = 0; i < lunghezza; i++) {
  if (interi[i] < x) {
    if (interi[i] % 2 == 0) {
      risultato.push(interi[i]);
    }
  }
}
let stringa = risultato.join("");
console.log(stringa);