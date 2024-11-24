import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente05diretivaNgforComponent } from './componente05diretiva-ngfor.component';

describe('Componente05diretivaNgforComponent', () => {
  let component: Componente05diretivaNgforComponent;
  let fixture: ComponentFixture<Componente05diretivaNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente05diretivaNgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente05diretivaNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
