function controlloMaggiore (numero_1:number, numero_2:number, numero_3:number):string{
    const messaggioFinale:string= "Il numero maggiore è: ";

    if (numero_1>= numero_2 && numero_1 >= numero_3){
        return messaggioFinale + numero_1;
    }
    if (numero_2>= numero_1 && numero_2 >= numero_3){
        return messaggioFinale + numero_2;
    }
    if (numero_3>= numero_1 && numero_3 >= numero_2){
        return messaggioFinale + numero_3;
    }
}
let numero_1:number = prompt ("Inserisci il primo valore") *1;
let numero_2:number = prompt ("Inserisci il secondo valore") *1;
let numero_3:number = prompt ("Inserisci il terzo valore") *1;

console.log (controlloMaggiore(numero_1, numero_2, numero_3));
