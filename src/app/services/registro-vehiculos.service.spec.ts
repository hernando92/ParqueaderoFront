import { TestBed } from '@angular/core/testing';

import { RegistroVehiculosService } from './registro-vehiculos.service';

describe('RegistroVehiculosService', () => {
  let service: RegistroVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
