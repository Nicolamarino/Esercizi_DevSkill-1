import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uva136',
  templateUrl: './uva136.page.html',
  styleUrls: ['./uva136.page.scss'],
})
export class Uva136Page implements OnInit {
  i: number;
  a: number[] = []
  numero = 1;
  temp = this.numero;
  ultimo: number;


  brutto() {
    while (this.a.length < this.i) {

      if (this.temp % 2 == 0 || this.temp % 3 == 0 || this.temp % 5 == 0) {
        if (this.temp % 2 == 0) {
          this.temp /= 2;
        }
        if (this.temp % 3 == 0) {
          this.temp /= 3;
        }
        if (this.temp % 5 == 0) {
          this.temp /= 5;
        }
      } else if (this.temp == 1) {
        this.a.push(this.numero++);
        this.temp = this.numero;
      } else {
        this.temp = ++this.numero;
      }

    }
    this.ultimo = this.a.pop();
    return this.ultimo;
  }




  constructor() { }

  ngOnInit() {
  }

}