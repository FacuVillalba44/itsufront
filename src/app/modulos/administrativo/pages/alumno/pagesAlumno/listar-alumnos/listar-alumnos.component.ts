import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../../modelos/usuario';
import { UsuariosService } from '../../../../services-administrativo/usuarios.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar-alumnos',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']

})export default class ListarAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

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
    this.router.navigate(['admin/alumnos/editar', id]);//ruta para que enviar el id del alumno a editar
  }

  eliminarAlumno(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás deshacer esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.eliminarAlumno(id).subscribe({
          next: () => {
            this.alumnos = this.alumnos.filter(alumno => alumno.idUsuario !== id);
            this.mensajeExito = 'Alumno eliminado con éxito';
            this.mensajeError=null;
            setTimeout(() => this.mensajeExito = null, 3000); // Desaparece en 3 segundos
          },
          error: (err) => {
            this.mensajeError = 'Error al eliminar alumno';
            this.mensajeExito = null;
            setTimeout(() => this.mensajeError = null, 10000);
            console.error('Error al eliminar alumno:', err);
          }
        });
      }
    });
  }
}