import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/usuario';
import { Carrera } from '../modelos/carrera';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlBase = "https://8080-idx-backenditsu-1740021031173.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev/itsuapi";

  constructor(private clienteHttp: HttpClient) { }

  // Método para listar alumnos
  listarAlumnos(): Observable<Alumno[]> {
    return this.clienteHttp.get<Alumno[]>(`${this.urlBase}/alumnos`);
  }

  // Método para agregar un nuevo usuario (alumno)
  agregarUsuario(nuevoAlumno: Alumno): Observable<Alumno> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.clienteHttp.post<Alumno>(`${this.urlBase}/usuarios`, nuevoAlumno, { headers });
  }

  // Método para obtener las carreras
  getCarreras(): Observable<Carrera[]> {
    return this.clienteHttp.get<Carrera[]>(`${this.urlBase}/carreras`);
  }

  //metodo para eliminar usuarios con rol de alumno
  eliminarAlumno(id: number): Observable<void> {
    return this.clienteHttp.delete<void>(`${this.urlBase}/usuarios/${id}`);
  }
}
