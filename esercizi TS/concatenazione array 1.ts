function leggiInput(): number {
    return +prompt("Inserisci un numero");
}

let a: number[] = [];
let b: number[] = [];
let c: number[] = [];

let inputA = leggiInput();
let inputB = leggiInput();

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        if (inputA === -1 || inputB === -1) {
            break;
        }
    }
    
    a.push(inputA);
    b.push(inputB);
    inputA = leggiInput();
    inputB = leggiInput();
}

for (let k = 0; k < a.length; k++) {
    if (k % 2 == 0) {
        c.push(a[k]);
    } else {
        c.push(b[k]);
    }
}

console.log("Array A " + a);
console.log("Array B " + b);
console.log("Array C " + c);