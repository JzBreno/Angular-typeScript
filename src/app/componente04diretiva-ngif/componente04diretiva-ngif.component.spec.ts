import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente04diretivaNgifComponent } from './componente04diretiva-ngif.component';

describe('Componente04diretivaNgifComponent', () => {
  let component: Componente04diretivaNgifComponent;
  let fixture: ComponentFixture<Componente04diretivaNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente04diretivaNgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente04diretivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
