import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../modelos/carrera';
import { PlanDeEstudio } from '../modelos/planDeEstudio';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private urlBase = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  guardarCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(`${this.urlBase}/carreras`, carrera, { headers: this.getHeaders() });
  }

  listarPlanesDeEstudio(): Observable<PlanDeEstudio[]> {
    return this.http.get<PlanDeEstudio[]>(`${this.urlBase}/planes`, { headers: this.getHeaders() });
  }
}