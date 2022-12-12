import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-general',
  templateUrl: './consulta-general.component.html',
  styleUrls: ['./consulta-general.component.css']
})
export class ConsultaGeneralComponent implements OnInit {
  
  @Output() parametros = new EventEmitter<any>()
  fechaInicial:  null = null;
  fechaFinal: null = null;

  @Input() respuestaFechas: any[] = [];
  @Input() respuestaFechasError: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  consultarFechas() {

    if (this.fechaInicial != null && this.fechaInicial != '' && this.fechaFinal != null && this.fechaFinal != '') {

      const objParametros = {
        FechaInicio: this.fechaInicial,
        FechaFin: this.fechaFinal
      }
      this.parametros.emit(objParametros)
    }else{
      alert('Faltan campos por diligenciar')
    }

  }

}
