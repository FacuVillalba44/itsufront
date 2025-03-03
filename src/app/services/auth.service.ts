import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlBase = 'https://8080-idx-backenditsu-1740021031173.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev/itsuapi';
  private tokenKey = 'auth_token';// 

  constructor(private http: HttpClient) {}

  login(emailUsuario: string, claveAcceso: string): Observable<any> {
    const body = { emailUsuario, claveAcceso };
    return this.http.post(`${this.urlBase}/auth/login`, body, { responseType: 'text' }).pipe(
      tap(token => {
        localStorage.setItem(this.tokenKey, token); // Guarda el token en el navegador
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Obtiene el token guardado
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Borra el token al cerrar sesión
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // Devuelve true si hay token
  }
  getRole(): number | null {//del token que viene del backend busca la id del rol
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        return decoded.idRol;
      } catch (e) {
        console.error('Error decodificando token:', e);
        return null;
      }
    }
    return null;
  }
}
