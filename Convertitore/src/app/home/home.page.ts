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
  unita: string;

  constructor() {}


  notificaConversione(messaggio: string) {
    let risultato = 0;
    let unita:string;
    const messaggioSpezzato = messaggio.split(":");
    unita = messaggioSpezzato[0];
    risultato = +messaggioSpezzato[1];

    if (unita === "Celsius") {
      this.f = risultato;
      console.log(messaggio)
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
  OnInit() { }
}
