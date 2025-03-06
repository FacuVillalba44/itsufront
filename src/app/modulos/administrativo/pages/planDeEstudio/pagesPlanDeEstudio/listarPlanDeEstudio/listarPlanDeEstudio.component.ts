import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pland-de-estudio',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone:true,
  templateUrl: './listarPlanDeEstudio.component.html',
  styleUrl: './listarPlanDeEstudio.component.css'
})
export default class ListarPlanDeEstudioComponent {

}
