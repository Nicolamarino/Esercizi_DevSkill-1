 function bisestile (anno:number): string{
     if (anno % 400 == 0){
         return "L'anno è bisestile";
     } else if(anno % 4 ==0 && anno % 100 !=0){
         return "L'anno è bisestile";
     }
     return "L'anno non è bisestile";
 }

let anno:number = prompt("Inserisci l'anno ") *1;
console.log(bisestile(anno));