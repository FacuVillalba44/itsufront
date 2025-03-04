import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; // Añade RouterStateSnapshot
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { // Añade state
    const role = this.authService.getRole();
    console.log('Rol en RoleGuard:', role);
    const currentPath = state.url; // Usa la URL completa
    console.log('Ruta actual:', currentPath); // Para depurar

    if (role === 2) { // Directivo
      return true;
    } else if (role === 1) { // Alumno
      if (currentPath.startsWith('/estudiantes')) { // Verifica la URL completa
        return true;
      } else {
        this.router.navigate(['/login'], { queryParams: { message: 'Solo directivos pueden acceder aquí' } });
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}