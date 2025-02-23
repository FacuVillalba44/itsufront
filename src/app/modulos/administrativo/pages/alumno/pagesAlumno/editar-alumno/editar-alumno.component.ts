import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../../../services-administrativo/usuarios.service';
import { Alumno } from '../../../../modelos/usuario';
import { Carrera } from '../../../../modelos/carrera';

@Component({
  selector: 'app-editar-alumno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formAlumno: FormGroup;
  alumnoId: number;
  carreras: Carrera[] = [];
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  private readonly PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  private readonly PATRON_DNI = /^\d{8}$/;
  private readonly PATRON_TELEFONO = /^\+54\s?\d{4,5}[-\s]?\d{4,6}$/;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.alumnoId = +this.route.snapshot.paramMap.get('id')!;
    this.formAlumno = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      apellidoUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      dniUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_DNI)]],
      domicilioUsuario: ['', Validators.required],
      telefonoUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_TELEFONO)]],
      emailUsuario: ['', [Validators.required, Validators.email]],
      idCarrera: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargarCarreras();
    this.cargarAlumno();
  }

  private cargarCarreras() {
    this.usuariosService.getCarreras().subscribe({
      next: (data) => {
        this.carreras = data;
        this.cargarAlumno(); // Movemos la carga del alumno aquí para asegurar que carreras esté listo
      },
      error: (err) => console.error('Error al cargar carreras:', err)
    });
  }

  private cargarAlumno() {
    this.usuariosService.obtenerAlumnoPorId(this.alumnoId).subscribe({
      next: (alumno) => {
        console.log('Datos del alumno cargados:', alumno); // Para depurar
        this.formAlumno.patchValue({
          nombreUsuario: alumno.nombreUsuario,
          apellidoUsuario: alumno.apellidoUsuario,
          dniUsuario: alumno.dniUsuario,
          domicilioUsuario: alumno.domicilioUsuario,
          telefonoUsuario: alumno.telefonoUsuario,
          emailUsuario: alumno.emailUsuario,
          idCarrera: this.getIdCarreraFromInscripciones(alumno) // Ajustamos para obtener idCarrera
        });
      },
      error: (err) => console.error('Error al cargar alumno:', err)
    });
  }

  private getIdCarreraFromInscripciones(alumno: Alumno): number | undefined {
    // Si el backend no devuelve idCarrera directamente, lo buscamos en las inscripciones
    // Esto asume que el backend podría incluir una relación en el futuro; por ahora usamos lo que devuelve
    return alumno.idCarrera; // Si el backend lo incluye, esto debería funcionar
  }

  campoInvalido(campo: string): boolean {
    const control = this.formAlumno.get(campo);
    return control ? control.invalid && control.touched : false;
  }

  guardarCambios() {
    if (!this.formAlumno.valid) {
      console.log('Formulario inválido');
      this.formAlumno.markAllAsTouched();
      return;
    }

    const datosActualizados: Alumno = {
      ...this.formAlumno.value,
      idUsuario: this.alumnoId,
      idRol: 1,
      claveAcceso: ''
    };

    this.usuariosService.actualizarAlumno(datosActualizados).subscribe({
      next: () => {
        this.mensajeExito = 'Alumno actualizado con éxito';
        this.mensajeError = null;
        setTimeout(() => {
          this.mensajeExito = null;
          this.router.navigate(['/alumnos/listar']);
        }, 2000);
      },
      error: (err) => {
        this.mensajeError = 'Error al actualizar el alumno';
        this.mensajeExito = null;
        console.error('Error al actualizar:', err);
        setTimeout(() => this.mensajeError = null, 2000);
      }
    });
  }
}