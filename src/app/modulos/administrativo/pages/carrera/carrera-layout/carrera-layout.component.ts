import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-carrera-layout',
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './carrera-layout.component.html',
  styleUrl: './carrera-layout.component.css'
})
export default class CarreraLayoutComponent {
  active: any;
}
