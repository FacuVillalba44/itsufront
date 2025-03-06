import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agregar-calendario',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './agregar-calendario.component.html',
  styleUrl: './agregar-calendario.component.css'
})
export default class AgregarCalendarioComponent {

}
