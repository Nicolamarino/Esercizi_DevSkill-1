function minuscolo (nome:string, cognome:string):string {
    let nomeLw:string = nome.toLowerCase ();
    let cognomeLw:string =  cognome.toLowerCase();
    let outputLw = nomeLw + " " + cognomeLw;
    return outputLw
}

let nome:string = prompt ("inserisci il tuo nome");
let cognome:string = prompt ("inserisci il tuo cognome");

console.log(minuscolo(nome, cognome));