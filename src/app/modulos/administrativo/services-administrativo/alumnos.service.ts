import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
//esta parte nos permite conectarnosÑ con el back a través de http
export class AlumnosService {
  private urlBase ="https://8080-idx-itsubackend-1737470901504.cluster-ve345ymguzcd6qqzuko2qbxtfe.cloudworkstations.dev/itsuapi/usuario";
  constructor(private clienteHttp: HttpClient) { }

  //este método nos permite listar los alumnos a traves de una petición get
  listarAlumnos(): Observable<Usuario[]>{
    //devuelve un arreglo de tipo alumno pero envuelto en un observable
    return this.clienteHttp.get<Usuario[]>(this.urlBase); 
  }
}
//NOTA: este servicio se utiliza desde el archivo "listar-alumnos.component.ts"