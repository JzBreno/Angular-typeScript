import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente06diretivaNfswitchComponent } from './componente06diretiva-nfswitch.component';

describe('Componente06diretivaNfswitchComponent', () => {
  let component: Componente06diretivaNfswitchComponent;
  let fixture: ComponentFixture<Componente06diretivaNfswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente06diretivaNfswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente06diretivaNfswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
