import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroVehiculosService {

  constructor(private http: HttpClient) {

  }

  registrarIngreso(parametros: any): Observable<any> {

    const URL = 'http://localhost:1835/api/RegistroVehiculo/RegistrarIngreso';
    const headers = { 'Content-Type': 'application/json' }

    parametros.TipoVehiculo = parseInt(parametros.TipoVehiculo);
    const body = JSON.stringify(parametros);

    return this.http.post(URL, body, { 'headers': headers });

  }

  consultarPlaca(parametros: any): Observable<any> {

    const URL = 'http://localhost:1835/api/RegistroVehiculo/ConsultarPorPlaca?Placa=' + parametros.Placa + '&RegistroVehiculoFacturaRelacionada=' + parametros.Factura;
    return this.http.get(URL);

  }


  registrarSalida(parametros: any): Observable<any> {

    const URL = 'http://localhost:1835/api/RegistroVehiculo/RegistrarSalida';
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(parametros);

    return this.http.post(URL, body, { 'headers': headers });

  }

}
