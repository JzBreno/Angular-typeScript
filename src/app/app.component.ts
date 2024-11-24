import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Componente01Component} from './componente01/componente01.component';
import {Componente02Component} from './componente02/componente02.component';
import {
  Componente03propertiesbindingsComponent
} from './componente03propertiesbindings/componente03propertiesbindings.component';
import {Componente04diretivaNgifComponent} from './componente04diretiva-ngif/componente04diretiva-ngif.component';
import {Componente05diretivaNgforComponent} from './componente05diretiva-ngfor/componente05diretiva-ngfor.component';
import {
  Componente06diretivaNfswitchComponent
} from './componente06diretiva-nfswitch/componente06diretiva-nfswitch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente01Component, Componente02Component, Componente03propertiesbindingsComponent, Componente04diretivaNgifComponent, Componente05diretivaNgforComponent, Componente06diretivaNfswitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Basico';
}
