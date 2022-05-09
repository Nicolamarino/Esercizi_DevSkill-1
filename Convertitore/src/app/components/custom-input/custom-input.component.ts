import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() misura: string;
  @Input() valore: number;
  valoreConvertito: number;

  @Output()
  eventoConversione = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
  converter(): void {
    if (this.misura === "Celsius") {
      this.valoreConvertito = this.arrotonda((this.valore * 9 / 5) + 32);
    } else if (this.misura === "Farheneith") {
      this.valoreConvertito = this.arrotonda((this.valore - 32) * 5 / 9);
    } else if (this.misura === "Chilometri") {
      this.valoreConvertito = this.arrotonda(this.valore / 1.609);
    } else if (this.misura === "Miglia") {
      this.valoreConvertito = this.arrotonda(this.valore * 1.609);
    }
    this.eventoConversione.emit(this.misura + ":" + this.valoreConvertito);
  }
  arrotonda(risultato: number): number {
    return +risultato.toPrecision(3);
  }
}

