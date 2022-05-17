function positivoNegativo(numero:number):string{
    if (numero >=0){
        return "Il numero è Positivo";
    }
    return "Il numero è Negativo";
}


let numero:number = prompt("Inserisci un numero")  * 1;

console.log (positivoNegativo(numero));