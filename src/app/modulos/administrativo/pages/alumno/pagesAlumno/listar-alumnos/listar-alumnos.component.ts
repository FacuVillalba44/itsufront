import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../../modelos/usuario';
import { UsuariosService } from '../../../../services-administrativo/usuarios.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listar-alumnos',
  imports: [CommonModule],
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']

})export default class ListarAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerAlumnos();
  }

  private obtenerAlumnos() {
    this.usuariosService.listarAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
      },
      error: (err) => {
        console.error('Error al cargar alumnos:', err);
      }
    });
  }

  editarAlumno(id: number) {
    this.router.navigate(['/alumnos/editar', id]);//ruta para que enviar el id del alumno a editar
  }

  eliminarAlumno(id: number) {
    if (confirm('¿Estás seguro de eliminar este alumno?')) {
      this.usuariosService.eliminarAlumno(id).subscribe({
        next: () => {
          this.alumnos = this.alumnos.filter(alumno => alumno.idUsuario !== id);
          console.log('Alumno eliminado con éxito');
        },
        error: (err) => {
          console.error('Error al eliminar alumno:', err);
        }
      });
    }
  }
}