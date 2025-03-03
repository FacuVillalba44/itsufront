import { Component } from '@angular/core';
import { NavbarAlumnoComponent } from '../components/navbarAlumno/navbarAlumno.component'
import { SidebarAlumnoComponent } from '../components/sidebarAlumno/sidebarAlumno.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-alumno',
  imports: [NavbarAlumnoComponent,SidebarAlumnoComponent,RouterOutlet],
  templateUrl: './layout-alumno.component.html',
  styleUrl: './layout-alumno.component.css'
})
export default class LayoutAlumnoComponent {

}
