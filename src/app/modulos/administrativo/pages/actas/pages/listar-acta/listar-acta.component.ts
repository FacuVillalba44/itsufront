import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-acta',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './listar-acta.component.html',
  styleUrl: './listar-acta.component.css'
})
export default class ListarActaComponent {

}
