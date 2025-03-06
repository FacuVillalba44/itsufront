import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-actas-layout',
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './actas-layout.component.html',
  styleUrl: './actas-layout.component.css'
})
export class ActasLayoutComponent {

}
