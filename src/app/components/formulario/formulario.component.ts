import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametros = new EventEmitter<any>()

  cboTipoVehiculo: number = 0;
  placa = '';

  tipoVehiculos: any[] = [
    { TipoVehiculoId: 1, TipoVehiculoDescripcion: 'Carro' },
    { TipoVehiculoId: 2, TipoVehiculoDescripcion: 'Moto' },
    { TipoVehiculoId: 3, TipoVehiculoDescripcion: 'Bicicleta' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  registrarVehiculo() {

    if (this.placa != '' && this.cboTipoVehiculo > 0) {

      const objParametros = {
        Placa: this.placa,
        TipoVehiculo: this.cboTipoVehiculo
      }

      this.parametros.emit(objParametros)

      this.cboTipoVehiculo = 0;
      this.placa = '';

    }

  }


}
