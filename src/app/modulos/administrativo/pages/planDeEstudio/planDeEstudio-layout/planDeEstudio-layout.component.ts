import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-plan-de-estudio',
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './planDeEstudio-layout.component.html',
  styleUrl: './planDeEstudio-layout.component.css'
})
export default class PlanDeEstudioComponent {
  active: any;
}
