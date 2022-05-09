import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  c: number;
  f: number;
  km: number;
  mi: number;

  i: number;
  j: number;
  a: number[] = [];
  max: number = 0;
  occ: number = 0;
  k: number;
  z: number;

  constructor() { }


  notificaConversione(messaggio: string) {
    let risultato = 0;
    let unita: string;
    const messaggioSpezzato = messaggio.split(":");
    unita = messaggioSpezzato[0];
    risultato = +messaggioSpezzato[1];

    if (unita === "Celsius") {
      this.f = risultato;
    }
    if (unita === "Farheneith") {
      this.c = risultato;
    }
    if (unita === "Chilometri") {
      this.mi = risultato;
    }
    if (unita === "Miglia") {
      this.km = risultato;
    }
  }
  massimo(): void {
    this.k = this.j;
    this.z = this.i;
    while (this.j >= this.i) {
      let n: number = this.j;
      while (n != 1) {
        if (n % 2 == 0) {
          n = n / 2
          this.a.push(n)
        } else {
          n = 3 * n + 1
          this.a.push(n)
        }
        this.occ = this.a.length + 1;
      }

      if (this.occ > this.max) {
        this.max = this.occ;
      }
      this.a = [];
      this.j--;
    }
    this.i= this.i -this.i;
    this.j= this.j -this.j;
  }
  OnInit() { }
}
