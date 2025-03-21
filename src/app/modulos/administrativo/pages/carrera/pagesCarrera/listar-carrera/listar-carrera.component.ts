import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importamos CommonModule

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-carrera',
  standalone: true, // IndRouterModuleicamos que es un componente standalone
  imports: [CommonModule, RouterModule], // Agregamos CommonModule aquí
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export default class ListarCarreraComponent {

}