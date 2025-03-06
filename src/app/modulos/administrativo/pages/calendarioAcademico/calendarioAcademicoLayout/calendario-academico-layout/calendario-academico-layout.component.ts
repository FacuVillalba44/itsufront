import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calendario-academico-layout',
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './calendario-academico-layout.component.html',
  styleUrl: './calendario-academico-layout.component.css'
})
export default class CalendarioAcademicoLayoutComponent {
  active: any;
}
