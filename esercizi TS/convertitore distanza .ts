function kmToMiles(distanza: number): number {
  return distanza * 1.609;
}
function milesToKm(distanza: number): number {
  return distanza / 1.609;
}
function celsToFahr(temp: number): number {
  return ((9 / 5) * temp) + 32;
}
function fahrToCels(temp: number): number {
  return (temp - 32) * (5 / 9);
}
function stampaDistanza(risulato1: number): void {
  const messaggio:string  = "la conversione è pari a ";
  console.log(messaggio + " " + risulato1 )
}
function stampaTemp(risulato2: number): void {
    const messaggio:string = "la conversione è pari a ";
  console.log(messaggio +" " + risulato2 + " Gradi")
}

let scelta1: string = prompt("digita: \n - 1 se vuoi convertire una distanza \n - 2 se vuoi convertire una temperatura");
if (scelta1 == "1") {
  let scelta2: string = prompt("scegli se convertire da Km o da Mi");
  if (scelta2 == "Km" || scelta2 == "KM" || scelta2 == "km" ) {
    let distanza: number = prompt("Inserisci la distanza da convertire") * 1;
    stampaDistanza(kmToMiles(distanza));
  } else if(scelta2 == "Mi" || scelta2 == "mi"){
    let distanza: number = prompt("Inserisci la distanza da convertire") * 1;
    stampaDistanza(milesToKm(distanza));
  }
}else if (scelta1 == "2"){
  let scelta2: string = prompt("scegli se convertire da C o se convertire da F");
  if (scelta2 == "C" || scelta2 == "c") {
    let temp: number = prompt("Inserisci la temperatura da convertire") * 1;
    stampaTemp(celsToFahr(temp));
  }else if (scelta2 == "F" || scelta2 == "f"){
    let temp: number = prompt("Inserisci la temperatura da convertire") * 1;
    stampaTemp(fahrToCels(temp));
  }
}
