import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-pland-de-estudio',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone:true,
  templateUrl: './editar-pland-de-estudio.component.html',
  styleUrl: './editar-pland-de-estudio.component.css'
})
export default class EditarPlanDeEstudioComponent {

}
