import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-agregar-alumno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.css'
})
export default class AgregarAlumnoComponent {
  formAlumno: FormGroup;

  // Patrones de validación reutilizables
  private readonly PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  private readonly PATRON_DNI = /^\d{8}$/;
  private readonly PATRON_TELEFONO = /^\+54\s?\d{4,5}[-\s]?\d{4,6}$/;

  constructor(private fb: FormBuilder) {
    this.formAlumno = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      apellidoUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      dniUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_DNI)]], // DNI como string
      domicilioUsuario: ['', Validators.required],
      telefonoUsuario: ['', [Validators.required, Validators.pattern(this.PATRON_TELEFONO)]],
      emailUsuario: ['', [Validators.required, Validators.email]]
    });
  }

  // Verifica si un campo es inválido y ha sido tocado
  campoInvalido(campo: string): boolean {
    const control = this.formAlumno.get(campo);
    return control ? control.invalid && control.touched : false;
  }

  // Función optimizada para encriptar la clave
  private async encriptarClave(clave: string): Promise<string> {
    return await bcrypt.hash(clave, 8); // Costo reducido a 8
  }

  // Registra al alumno
  async registrarAlumno() {
    if (!this.formAlumno.valid) {
      console.log('Formulario inválido');
      this.formAlumno.markAllAsTouched(); // Marca todos los campos para que muestren errores
      return;
    }

    const datosAlumno = this.formAlumno.value;
    datosAlumno.idRol = 1; // Asignación del id del rol alumno
    datosAlumno.claveAcceso = await this.encriptarClave(datosAlumno.dniUsuario); // Encripta el DNI

    console.log('Datos del Alumno:', datosAlumno);
    // Aquí puedes enviar los datos al backend
  }
}