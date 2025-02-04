import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import ListarAlumnosComponent from '../../pages/listar-alumnos/listar-alumnos.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    RouterLink
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
