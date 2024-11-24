import { Component } from '@angular/core';
import {ɵEmptyOutletComponent} from '@angular/router';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [
    ɵEmptyOutletComponent
  ],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  //variaveis
  private _nome: string = 'Breno';
  private _idade: number = 25;

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    this._idade = value;
  }
}
