import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Carrera } from '../../../../modelos/carrera';
import { UsuariosService } from '../../../../../administrativo/services-administrativo/usuarios.service';

@Component({
  selector: 'app-agregar-carrera',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-carrera.component.html',
  styleUrl: './agregar-carrera.component.css'
})
export default class AgregarCarreraComponent implements OnInit {
  formCarrera: FormGroup;
  mensajeExito: string | null = null; // Para mostrar el mensaje
  mensajeError: string | null = null; // Para errores
  carreras: Carrera[] = [];
  private readonly PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  constructor(
   
    private fb: FormBuilder,
    private usuariosService: UsuariosService
  ) {

    this.formCarrera = this.fb.group({
      nombreCarrera: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      idCarrera: ['', Validators.required],
      fechaInscripcion: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.usuariosService.getCarreras().subscribe({
      next: (data) => this.carreras = data,
      error: (err) => console.error('Error al cargar carreras:', err)
    });
  }
  campoInvalido(campo: string): boolean {
    const control = this.formCarrera.get(campo);
    return control ? control.invalid && control.touched : false;
  }
  registrarCarrera() { // esto habilita o desabilita el botón para enviar el
    if (!this.formCarrera.valid) {
      console.log('Formulario inválido');
      this.formCarrera.markAllAsTouched();
      return;
    }

  }
}
