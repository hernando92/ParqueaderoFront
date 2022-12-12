import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnChanges {
  @Input() respuestaIngreso: any = {};
  @Input() respuestaIngresoError: string = '';
  clase: string = '';
  mensaje: string = '';
  titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    console.log(this.respuestaIngreso)
    console.log(this.respuestaIngresoError)

    if (this.respuestaIngresoError != '') {
      this.clase = 'bg-danger';
      this.mensaje = this.respuestaIngresoError;
      this.titulo = 'Validación'
    } else if (Object.entries(this.respuestaIngreso).length > 0) {
      this.clase = 'bg-success';
      this.mensaje = 'Registro exitoso - ticket : ' + this.respuestaIngreso.registroVehiculoId;
      this.titulo = 'Ingreso'
    }

  }


}
