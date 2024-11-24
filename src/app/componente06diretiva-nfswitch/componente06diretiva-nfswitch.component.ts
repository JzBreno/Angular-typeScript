import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-componente06diretiva-nfswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente06diretiva-nfswitch.component.html',
  styleUrl: './componente06diretiva-nfswitch.component.css'
})
export class Componente06diretivaNfswitchComponent {
 //variavel contendo uma linguagem
  linguagem:string = 'HTML';

}
