import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-calendario',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone:true,
  templateUrl: './editar-calendario.component.html',
  styleUrl: './editar-calendario.component.css'
})
export default class EditarCalendarioComponent {

}
