let formazione: any;
let nome: string[] = [];
let attacco: number[] = [];
let difesa: number[] = [];
let formazioneA: string[] = [];
let formazioneD: string[] = [];

for (let i = 0; i < 10; i++) {
    formazione = prompt("Inserisci i dati del giocatore (Nome-Attacco-Difesa)");
    let messaggioDiviso = formazione.split("-", 3);
    let nomeDiviso = messaggioDiviso[0];
    let attaccoDiviso = messaggioDiviso[1];
    let difesaDiviso = messaggioDiviso[2];
    nome.push(nomeDiviso);
    attacco.push(attaccoDiviso);
    difesa.push(difesaDiviso);
}

for (let i = 0; i < 10; i++) {
    if (attacco[i] < attacco[i + 1]) {
        let tempAttacco: number = attacco[i];
        let tempNome: string = nome[i];
        nome[i] = nome[i + 1]
        nome[i + 1] = tempNome;
        attacco[i] = attacco[i + 1];
        attacco[i + 1] = tempAttacco;
    } else if (difesa[i] < difesa[i + 1]) {
        let tempDifesa: number = difesa[i];
        let tempNome: string = nome[i];
        nome[i] = nome[i + 1]
        nome[i + 1] = tempNome;
        difesa[i] = difesa[i + 1];
        difesa[i + 1] = tempDifesa;
    }
}
for (let i = 0; i < 10; i++) {
    if(formazioneA.length<5){
       formazioneA.push (nome[i]); 
    }else{
        formazioneD.push(nome[i]);
    }
}
formazioneA.sort(function (a, b) {
  return a.localeCompare(b); 
});
formazioneD.sort(function (a, b) {
  return a.localeCompare(b); 
});

console.log(formazioneA);
console.log(formazioneD);
