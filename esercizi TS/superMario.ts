let altezzaMuri:number [] = [];
let highJump=0
let lowJump=0
let livelli:number = +prompt("Inserisci il numero di livelli");
for (let i=0; i<=livelli;i++){
    let muri:number=+prompt("Inserisci il numero di muri presenti nel livello");
    for(let j=0; j<muri;j++){
        let altezza:number=+prompt("Insersci l'altezza dei muri")
        altezzaMuri.push(altezza);
        console
    }
    for(let k=0; k<muri-1;k++){
        if(altezzaMuri[k]<altezzaMuri[k+1]){
            highJump++
        }
        if(altezzaMuri[k]>altezzaMuri[k+1]){
            lowJump++
        }
    }
    console.log("Nel livello: "+ altezzaMuri[i]+"ho saltato in alto: "+highJump+ " E ho saltato il basso: "+lowJump);
    altezzaMuri = [];
    highJump=0
    lowJump=0
}
