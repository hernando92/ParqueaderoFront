import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGeneralComponent } from './consulta-general.component';

describe('ConsultaGeneralComponent', () => {
  let component: ConsultaGeneralComponent;
  let fixture: ComponentFixture<ConsultaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
