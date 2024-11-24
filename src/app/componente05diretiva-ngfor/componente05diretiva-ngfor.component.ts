import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-componente05diretiva-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente05diretiva-ngfor.component.html',
  styleUrl: './componente05diretiva-ngfor.component.css'
})
export class Componente05diretivaNgforComponent {
  nomes: string[] = ['Breno','Jose','Antonio','Maria','Leo'];


}
