import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-acta',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './editar-acta.component.html',
  styleUrl: './editar-acta.component.css'
})
export default class EditarActaComponent {

}
