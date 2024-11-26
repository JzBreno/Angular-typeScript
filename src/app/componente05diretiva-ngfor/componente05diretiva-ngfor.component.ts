import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-componente05diretiva-ngfor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente05diretiva-ngfor.component.html',
  styleUrl: './componente05diretiva-ngfor.component.css'
})
export class Componente05diretivaNgforComponent {

  detectoras = ['1', '2', '3', '4', '5']; // Lista de detectoras
  selectedDetectoras: string[] = []; // Armazena as selecionadas

  // Método para capturar mudanças no checkbox
  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement; // Obtém o checkbox
    const value = input.value;

    if (input.checked) {
      // Adiciona à lista se estiver marcado
      this.selectedDetectoras.push(value);
    } else {
      // Remove da lista se estiver desmarcado
      this.selectedDetectoras = this.selectedDetectoras.filter(det => det !== value);
    }

    console.log(this.selectedDetectoras); // Debug: verificar quais estão selecionadas
  }
}
