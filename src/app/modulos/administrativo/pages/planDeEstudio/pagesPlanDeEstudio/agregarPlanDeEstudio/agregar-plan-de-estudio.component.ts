import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agregar-pland-de-estudio',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],

  templateUrl: './agregar-plan-de-estudio.component.html',
  styleUrl: './agregar-plan-de-estudio.component.css'
})
export default class AgregarPlanDeEstudioComponent {

}
