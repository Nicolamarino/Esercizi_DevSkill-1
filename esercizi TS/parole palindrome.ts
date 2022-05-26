function reverseString(input:string){
    inversa=input.split("").reverse().join("");
    return inversa
}
let inversa:string;
let input:string= prompt("Inserisci input");
reverseString(input);

if(input==inversa){
    console.log("La parola "+ input + " è palindroma")
}else{
    console.log("La parola "+ input + " non è palindroma")
}