let numeri:number[]=[1,5,20,15,500,230,44,7,43,10,];
let max:number=numeri[0]

for (let i=1; i<numeri.length;i++){
 if (numeri[i]> max){
   max=numeri[i];
 }

 
}
console.log ("il massimo è: " + max);