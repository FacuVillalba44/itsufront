import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBase = "https://8080-idx-backenditsu-1740021031173.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev/itsuapi/usuarios";

  constructor(private clienteHttp: HttpClient) { }

  // Método para listar alumnos
  listarAlumnos(): Observable<Alumno[]> {
    return this.clienteHttp.get<Alumno[]>(this.urlBase);
  }

  // Método para agregar un nuevo usuario (alumno)
  agregarUsuario(nuevoAlumno: Alumno): Observable<Alumno> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.clienteHttp.post<Alumno>(this.urlBase, nuevoAlumno, { headers });
  }
}
