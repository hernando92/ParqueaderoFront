import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-salida-vehiculo',
  templateUrl: './salida-vehiculo.component.html',
  styleUrls: ['./salida-vehiculo.component.css']
})
export class SalidaVehiculoComponent implements OnChanges {

  @Output() parametros = new EventEmitter<any>()
  @Output() parametrosSalida = new EventEmitter<any>()
  @Input() respuestaSalida: any = {};
  @Input() respuestaSalidaError: string = '';

  @Input() respuestaSalidaVehiculo: any = {};
  @Input() respuestaSalidaVehiculoError: string = '';

  placaSalida = '';
  factura = '';
  totalMinutos = 0;
  descuento = 0;
  valorPagar = 0;

  mensajeSalida = '';


  constructor() { }

  ngOnChanges(): void {
    console.log(this.respuestaSalida)
    console.log(this.respuestaSalidaError)

    this.mensajeSalida = '';
    if (Object.entries(this.respuestaSalida).length > 0) {

      this.totalMinutos = this.respuestaSalida.totalMinutos;
      this.descuento = this.respuestaSalida.registroVehiculoValorDescuento;
      this.valorPagar = this.respuestaSalida.registroVehiculoValorTotal;

    } else {

      this.respuestaSalida = {};
      this.totalMinutos = 0;
      this.descuento = 0;
      this.valorPagar = 0;
      this.respuestaSalidaVehiculo = {};
    }

    if (Object.entries(this.respuestaSalidaVehiculo).length > 0) {

      this.respuestaSalida = {};
      this.totalMinutos = 0;
      this.descuento = 0;
      this.valorPagar = 0;
      this.placaSalida = '';
      this.factura = '';

      this.mensajeSalida = 'Salida exitosa'

    }

  }

  consultarPlaca() {

    if (this.placaSalida != '') {

      const objParametros = {
        Placa: this.placaSalida,
        Factura: this.factura
      }

      this.parametros.emit(objParametros)
    }else{
      alert('Faltan campos por diligenciar')
    }

  }

  registrarSalida() {

    if (Object.entries(this.respuestaSalida).length > 0) {
      this.parametrosSalida.emit(this.respuestaSalida)
    }else{
      alert('No ha consultado el vehiculo')
    }
  }

}
