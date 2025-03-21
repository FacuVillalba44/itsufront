import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Carrera } from '../../../../modelos/carrera';
import { PlanDeEstudio } from '../../../../modelos/planDeEstudio';
import { CarreraService } from '../../../../services-administrativo/carrera.service';

@Component({
  selector: 'app-agregar-carrera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-carrera.component.html',
  styleUrls: ['./agregar-carrera.component.css']
})
export default class AgregarCarreraComponent implements OnInit {
  formCarrera: FormGroup;
  planesDeEstudio: PlanDeEstudio[] = [];
  mensajeExito: string | null = null;
  mensajeError: string | null = null;
  private readonly PATRON_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  constructor(
    private fb: FormBuilder,
    private carreraService: CarreraService,
  ) {
    this.formCarrera = this.fb.group({
      nombreCarrera: ['', [Validators.required, Validators.pattern(this.PATRON_NOMBRE)]],
      inicioDeDictado: ['', Validators.required],
      idPlanDeEstudio: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carreraService.listarPlanesDeEstudio().subscribe({
      next: (data) => {
        this.planesDeEstudio = data;
      },
      error: (err) => {
        console.error('Error al cargar planes de estudio:', err);
        this.mensajeError = 'Error al cargar planes de estudio';
        setTimeout(() => this.mensajeError = null, 3000);
      }
    });
  }

  campoInvalido(campo: string): boolean {
    const control = this.formCarrera.get(campo);
    return control ? control.invalid && control.touched : false;
  }

  // Ajustar datosCarrera para enviar un objeto compatible con el backend
registrarCarrera() {
  if (!this.formCarrera.valid) {
    console.log('Formulario inválido');
    this.formCarrera.markAllAsTouched();
    return;
  }

  const formValues = this.formCarrera.value;
  const datosCarrera: Carrera = {
    nombreCarrera: formValues.nombreCarrera,
    inicioDeDictado: formValues.inicioDeDictado,
    planDeEstudio: { idPlanDeEstudio: Number(formValues.idPlanDeEstudio) }
  };

  console.log('Datos de la carrera:', datosCarrera);

  this.carreraService.guardarCarrera(datosCarrera).subscribe({
    next: (response) => {
      this.mensajeExito = 'Carrera registrada con éxito';
      this.mensajeError = null;
      this.formCarrera.reset();
      setTimeout(() => {
        this.mensajeExito = null;
      }, 2000);
    },
    error: (err) => {
      this.mensajeError = 'Error al registrar la carrera';
      this.mensajeExito = null;
      console.error('Error:', err);
      setTimeout(() => this.mensajeError = null, 3000);
    }
  });
}
}