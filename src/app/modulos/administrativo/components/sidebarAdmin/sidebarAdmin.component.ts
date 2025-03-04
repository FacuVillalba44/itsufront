import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, RouterLink],
  templateUrl: './sidebarAdmin.component.html',
  styleUrl: './sidebarAdmin.component.css'
})
export class SidebarAdminComponent {

  constructor(
    private authService: AuthService, // Para cerrar sesión
    private router: Router // Para redirigir
  ) {}

  logout() {
    this.authService.logout(); // Borra el token
    this.router.navigate(['/login']); // Redirige a login
  }
}