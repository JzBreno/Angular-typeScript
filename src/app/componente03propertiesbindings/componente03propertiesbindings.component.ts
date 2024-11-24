import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-componente03propertiesbindings',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './componente03propertiesbindings.component.html',
  styleUrl: './componente03propertiesbindings.component.css'
})
export class Componente03propertiesbindingsComponent {
  imagem:string = "./assets/dia.jpg";

   alterarImagem(){
     if(this.imagem === './assets/dia.jpg'){
       this.imagem = './assets/noite.jpg';
     }else{
       this.imagem = './assets/dia.jpg';
     }
   }
}
