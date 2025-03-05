import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Alumno } from '../modelos/usuario';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
//esta parte nos permite conectarnosÑ con el back a través de http
export class UsuarioService {
  private urlBase = environment.apiBaseUrl;
  constructor(private clienteHttp: HttpClient) { }

  //este método nos permite listar los alumnos a traves de una petición get
  listarAlumnos(): Observable<Alumno[]>{return this.clienteHttp.get<Alumno[]>(this.urlBase); 
  }
}
//NOTA: este servicio se utiliza desde el archivo "listar-alumnos.component.ts"