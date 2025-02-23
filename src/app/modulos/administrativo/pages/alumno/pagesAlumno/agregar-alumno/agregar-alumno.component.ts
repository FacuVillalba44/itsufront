import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../../../../administrativo/services-administrativo/usuarios.service';
import { Carrera } from '../../../../modelos/carrera';
import { Alumno } from '../../../../modelos/usuario';

@Component({
  selector: 'app-agregar-alumno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.css'
})
export default class AgregarAlumnoComponent implements OnInit {
  formAlumno: FormGroup;
  carreras: Carrera[] = [];
  mensajeExito: string | null = null; // Para mostrar el mensaje
  mensajeError: string | null = null; // Para errores
  private readonly PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  private readonly PATRON_DNI = /^\d{8}$/;
  private readonly PATRON_TELEFONO = /^\+54\s?\d{4,5}[-\s]?\d{4,6}$/;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService
  ) {
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
    this.usuariosService.getCarreras().subscribe({
      next: (data) => this.carreras = data,
      error: (err) => console.error('Error al cargar carreras:', err)
    });
  }

  campoInvalido(campo: string): boolean {
    const control = this.formAlumno.get(campo);
    return control ? control.invalid && control.touched : false;
  }

  registrarAlumno() { // Quitamos async porque ya no usamos await
    if (!this.formAlumno.valid) {
      console.log('Formulario inválido');
      this.formAlumno.markAllAsTouched();
      return;
    }

    const datosAlumno: Alumno = this.formAlumno.value;
    datosAlumno.idRol = 1;//controlar que siempre quede en 1 que es el id del rol alumno
    datosAlumno.claveAcceso = datosAlumno.dniUsuario; // Enviamos el DNI sin encriptar

    console.log('Datos del Alumno:', datosAlumno);

    this.usuariosService.agregarUsuario(datosAlumno).subscribe({
      next: (response) => {
        console.log('Alumno registrado con éxito:', response);
        this.mensajeExito = 'Alumno registrado con éxito';
        this.mensajeError = null;
        this.formAlumno.reset();
        setTimeout(() => this.mensajeExito = null, 3000); // Desaparece en 3 segundos
      },
      error: (err) => {
        console.error('Error al registrar alumno:', err);
        this.mensajeError = 'Error al registrar el alumno';
        this.mensajeExito = null;
        setTimeout(() => this.mensajeError = null, 3000);
      }
    });
  }
}