import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-componente04diretiva-ngif',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './componente04diretiva-ngif.component.html',
  styleUrl: './componente04diretiva-ngif.component.css'
})
export class Componente04diretivaNgifComponent {
  //variavel para exibir ou ocultar o quadrado
  exibir:boolean = true;
  cor:string = 'blue';

  ativarDesativarcoratual(
  ){
    if(this.cor === 'blue'){
      this.cor = 'red';

    }else{
      this.cor = 'blue';
    }
  }
  ativarDesativar(
  ){
    if(this.exibir == true){
      this.exibir = false;

    }else{
      this.exibir = true;
    }
  }
}
