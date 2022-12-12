import { Component } from '@angular/core';
import { RegistroVehiculosService } from './services/registro-vehiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parqueadero';
  respuestaIngreso: any = {};
  respuestaIngresoError: string = '';

  respuestaSalida: any = {};
  respuestaSalidaError: string = '';

  respuestaSalidaVehiculo: any = {};
  respuestaSalidaVehiculoError: string = '';

  respuestaFechas: any[] = [];
  respuestaFechasError: string = '';

  constructor(private registroVehiculoService: RegistroVehiculosService) {
  }

  registrarVehiculo(parametros: any) {

    this.respuestaIngreso = {};
    this.respuestaIngresoError = '';

    this.registroVehiculoService.registrarIngreso(parametros).subscribe(data => {
      console.log(data);
      this.respuestaIngreso = data;
    }, (err => {
      console.log(err);
      this.respuestaIngresoError = err.error.detail;
    }))
  }

  consultarPlaca(parametros: any) {

    this.respuestaSalida = {};
    this.respuestaSalidaError = '';

    this.registroVehiculoService.consultarPlaca(parametros).subscribe(data => {
      this.respuestaSalida = data;
    }, (err => {
      this.respuestaSalidaError = err.error.detail;
    }))

  }

  registrarSalida(parametros: any) {

    this.respuestaSalidaVehiculo = {};
    this.respuestaSalidaVehiculoError = '';

    this.registroVehiculoService.registrarSalida(parametros).subscribe(data => {
      this.respuestaSalidaVehiculo = data;
    }, (err => {
      this.respuestaSalidaVehiculoError = err.error.detail;
    }))
  }

  consultarFechas(parametros: any) {

    this.respuestaFechas = [];
    this.respuestaFechasError = '';

    this.registroVehiculoService.consultarFechas(parametros).subscribe(data => {
      this.respuestaFechas = data;
    }, (err => {
      this.respuestaFechasError = err.error.detail;
    }))

  }

}