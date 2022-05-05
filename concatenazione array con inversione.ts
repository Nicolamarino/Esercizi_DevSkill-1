let a: number[] = [];
let b: number[] = [];
let c: number[] = [];

let inputA:number = +prompt("inserisci valore A");
let inputB:number = +prompt("inserisci valore B");

for (let i = 0; i < 5; i++) {
    a.push(inputA);
    b.push(inputB);
    inputA = +prompt("inserisci valore A");
    inputB = +prompt("inserisci valore B");
}
for (let j = 0; j < 5; j++) {

    if (inputA === -1 ){
        break;
    }else{
    a.push(inputA);
    inputA = +prompt("inserisci valore A");
    }
}
for (let z = 0; z < 5; z++) {

    if (inputB === -1 ){
        break;
    }else{
     b.push(inputB);
    inputB = +prompt("inserisci valore B");
   }
}
b.reverse();
c=a.concat(b);

console.log("Array A " + a);
console.log("Array B " + b);
console.log("Array C " + c);