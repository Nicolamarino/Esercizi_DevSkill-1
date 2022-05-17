function maiuscolo(nome:string, cognome:string):string {
    let nomeUp:string = nome.toUpperCase ();
    let cognomeUp:string =  cognome.toUpperCase();
    let outputUp = nomeUp + " " + cognomeUp;
    return outputUp
}

let nome:string = prompt ("inserisci il tuo nome");
let cognome:string = prompt ("inserisci il tuo cognome");

console.log(maiuscolo(nome, cognome));