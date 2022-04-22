function eta(annoNascita:number){
    return "Hai " + (2022 - annoNascita) + " anni."
}
let annoNascita:number = prompt("Inserisci il tuo anno di nascita") *1;

console.log(eta(annoNascita));