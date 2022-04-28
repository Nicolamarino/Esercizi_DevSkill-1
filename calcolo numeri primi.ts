let contNumeriPrimi = 0;
let n = 2;
let messaggio: string = "Ho trovato i seguenti numeri primi";
while (contNumeriPrimi < 30) {
    let prime: boolean = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
        }
    }
    if (prime) {
        messaggio += n + " ";
        contNumeriPrimi++;
    }
    n++;
}
console.log(messaggio);