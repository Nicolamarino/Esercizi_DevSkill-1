function risultatoTabella(bmi:number):string{
    const risultato:string = "Il tuo BMI è: ";
    if (bmi < 16.5){
        return risultato + "Sottopeso severo"
    }else if(bmi >= 16.5 && bmi <= 18.4 ){
        return risultato + "Sottopeso"
    }else if(bmi >= 18.5 && bmi <= 24.9 ){
        return risultato + "Normale"
    }else if(bmi >= 25 && bmi <= 30 ){
        return risultato + "Sovrappeso"
    }else if(bmi >= 30.1 && bmi <= 34.9 ){
        return risultato + "Obesità di primo grado"
    }else if(bmi >= 35 && bmi <= 40 ){
        return risultato + "Obesità secondo grado"
    } else {
        return risultato + "Gskianto"
    }
}
function misurazione(misurazionePrecisa:string):string {
    if (misurazionePrecisa === "si"){
        let polso:number = prompt("Inserisci la circonferenza del tuo polso in cm") *1;
        let sesso:string = prompt ("Inserisci il tuo sesso con M o F");
        const esito:string = "La tua corporatura è: "
        if (sesso === "M" || sesso ==="m"){
            if (polso < 17){
                return esito + "Esile"
            }else if (polso >= 17 && polso <= 18){
                return esito + "Normale"
            }else {
                return esito + "Robusta"
            }
        }else if (sesso === "F" || sesso === "f"){
              if (polso < 15){
                return esito + "Esile"
            }else if (polso >= 15 && polso <= 16){
                return esito + "Normale"
            }else{
                return esito + "Robusta"
            }
        }
    }else if(misurazionePrecisa === "no"){
        return "buona giornata"
    }else{
        return "non hai inserita una scelta valida"
    }
}

let peso:number = prompt("Inserisci il tuo peso in libre: ") *1;
let altezza:number = prompt("Inserisci la tua altezza in piedi: ") *1;
let bmi:number = peso / (altezza * altezza);
let misurazionePrecisa:string = prompt("Vuoi effettuare una misurazione più precisa?");

altezza = altezza * 0.3;
peso = peso * 0.4;

console.log(risultatoTabella(bmi));
console.log(misurazione(misurazionePrecisa));