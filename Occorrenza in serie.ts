function leggiInput(): number {
    return +prompt("Inserisci un numero,-1 per terminare");
  }
  
  let sequenza: number[] = [];
  let input = leggiInput();
  
  while (input != -1) {
  
  
    sequenza.push(input);
    input = leggiInput();
  
  }
let k=0
let j=k+1
let max=0
let n = 0;
let occ:number=1;
for (let i=0; i< sequenza.length;i++){
    
    if(sequenza[k]==sequenza[j]){
        occ++
    }else{
        occ=1;
    }
    if(occ > max){
        max=occ;
        n= sequenza[k];
    }
    k++
    j++

}
console.log(n, max);