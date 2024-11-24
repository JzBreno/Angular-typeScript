import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente03propertiesbindingsComponent } from './componente03propertiesbindings.component';

describe('Componente03propertiesbindingsComponent', () => {
  let component: Componente03propertiesbindingsComponent;
  let fixture: ComponentFixture<Componente03propertiesbindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente03propertiesbindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente03propertiesbindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
