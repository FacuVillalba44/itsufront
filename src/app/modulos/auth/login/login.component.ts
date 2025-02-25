import { Component, OnInit } from '@angular/core'; // Añade OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router'; // Añade ActivatedRoute

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // Implementa OnInit
  emailUsuario: string = '';
  claveAcceso: string = '';
  errorMensaje: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Añade esto
  ) {}

  ngOnInit() {
    // Lee el mensaje de redirección desde los queryParams
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.errorMensaje = params['message'];
      }
    });
  }

  onLogin() {
    this.authService.login(this.emailUsuario, this.claveAcceso).subscribe({
      next: (token) => {
        console.log('Token recibido:', token);
        console.log('Rol recibido:', this.authService.getRole());
        const role = this.authService.getRole();
        if (role === 2) {
          console.log('Redirigiendo a admin...');
          this.router.navigate(['/admin/alumnos/listar']);
        } else if (role === 1) {
          console.log('Redirigiendo a alumnos/inicio...');
          this.router.navigate(['/alumnos']);
        } else {
          this.errorMensaje = 'Rol no soportado';
        }
      },
      error: (err) => {
        this.errorMensaje = 'Email o contraseña incorrectos';
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}