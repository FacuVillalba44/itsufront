import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-acta',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-acta.component.html',
  styleUrl: './crear-acta.component.css'
})
export default class CrearActaComponent {

}
