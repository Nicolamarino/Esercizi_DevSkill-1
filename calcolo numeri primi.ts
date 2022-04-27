function isPrimo(numeroP:number){

    for (let i=2; i<=numeroP/2; i++){
        if(numeroP % i == 0){
            return false;
        }
    }
    return true;
}
let numero:number = 110;
let array:number [] = [];
for(let i = 1; i<= numero; i++){
    if(isPrimo(i)){
        array.push(i);
    }
}

console.log("I numeri primi calcolati sono: " + array.length);
console.log("E sono: " + array);