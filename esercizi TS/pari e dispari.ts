
// Un numero si dice pari , se divisibile per 2
/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia POSITIVO o NEGATVO e stampi
a schermo :
Input: 2
Output: "Il numero e` positivo "
Input: -10
Output: "Il numero e` negativo "
*/

function controllo(numero:number):string {
    if (numero % 2 == 0 ){
        return "Il numero è pari"
    }
    return "Il numero è dispari"
}


let numero:number = prompt("Inserisci il numero") * 1;

console.log(controllo(numero));
