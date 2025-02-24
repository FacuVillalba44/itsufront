import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailUsuario: string = '';
  claveAcceso: string = '';
  errorMensaje: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.emailUsuario, this.claveAcceso).subscribe({
      next: (token) => {
        console.log('Token recibido:', token); // Para ver si llega el token del backend
        this.router.navigate(['/admin/alumnos/listar']);
      },
      error: (err) => {
        this.errorMensaje = 'Email o contraseña incorrectos';
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}
