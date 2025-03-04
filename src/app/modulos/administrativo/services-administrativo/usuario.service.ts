import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
//esta parte nos permite conectarnosÑ con el back a través de http
export class UsuarioService {
  private urlBase ="https://8080-idx-backenditsu-1740021031173.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev/itsuapi/usuarios";
  constructor(private clienteHttp: HttpClient) { }

  //este método nos permite listar los alumnos a traves de una petición get
  listarAlumnos(): Observable<Usuario[]>{
    //devuelve un arreglo de tipo alumno pero envuelto en un observable
    return this.clienteHttp.get<Usuario[]>(this.urlBase); 
  }
}
//NOTA: este servicio se utiliza desde el archivo "listar-alumnos.component.ts"