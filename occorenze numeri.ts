function leggiInput(): number {
    return +prompt("Inserisci un numero,-1 per terminare");
  }
  
  let sequenza: number[] = [];
  let input = leggiInput();
  
  while (input != -1) {
  
  
    sequenza.push(input);
    input = leggiInput();
  
  }
  
  let maxOcc = 0;
  let n = 0;
  
  for (let i = 0; i < sequenza.length; i++) {
  
    let occ = 1;
    for (let j = i + 1; j < sequenza.length; j++) {
  
  
      if (sequenza[i] === sequenza[j]) {
        occ++;
      }
    }
  
    if (occ > maxOcc) {
      maxOcc = occ;
      n = sequenza[i];
    }
  }
  
  console.log(n , maxOcc);
  