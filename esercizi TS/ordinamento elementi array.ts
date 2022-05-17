function leggiInput() {
    return +prompt("Inserisci un valore della sequenza")
}
let input: number;
let a: number[] = [];


let lunghezzaArray: number = +prompt("Inserisci la lunghezza della sequenza");
for (let i = 0; i < lunghezzaArray; i++) {
    input = leggiInput();
    a.push(input);
}
console.log(a);
for (let i = 0; i < lunghezzaArray; i++) {
    for (let j = i + 1; j < lunghezzaArray; j++) {
        if (a[i] > a[j]) {
            const temp: number = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);