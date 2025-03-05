import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/usuario';
import { Carrera } from '../modelos/carrera';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlBase = environment.apiBaseUrl;

  constructor(private clienteHttp: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  listarAlumnos(): Observable<Alumno[]> {
    return this.clienteHttp.get<Alumno[]>(`${this.urlBase}/alumnos`, { headers: this.getHeaders() });
  }

  agregarUsuario(nuevoAlumno: Alumno): Observable<Alumno> {
    return this.clienteHttp.post<Alumno>(`${this.urlBase}/usuarios`, nuevoAlumno, { headers: this.getHeaders() });
  }

  getCarreras(): Observable<Carrera[]> {
    return this.clienteHttp.get<Carrera[]>(`${this.urlBase}/carreras`, { headers: this.getHeaders() });
  }

  eliminarAlumno(id: number): Observable<void> {
    return this.clienteHttp.delete<void>(`${this.urlBase}/usuarios/${id}`, { headers: this.getHeaders() });
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno> {
    return this.clienteHttp.get<Alumno>(`${this.urlBase}/usuarios/${id}`, { headers: this.getHeaders() });
  }

  actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.clienteHttp.put<Alumno>(`${this.urlBase}/usuarios/${alumno.idUsuario}`, alumno, { headers: this.getHeaders() });
  }
}