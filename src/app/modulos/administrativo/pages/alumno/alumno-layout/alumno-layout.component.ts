import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alumno-layout',
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './alumno-layout.component.html',
  styleUrl: './alumno-layout.component.css'
})
export default class AlumnoLayoutComponent {
active: any;

}
