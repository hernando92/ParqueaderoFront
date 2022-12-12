import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaVehiculoComponent } from './salida-vehiculo.component';

describe('SalidaVehiculoComponent', () => {
  let component: SalidaVehiculoComponent;
  let fixture: ComponentFixture<SalidaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
