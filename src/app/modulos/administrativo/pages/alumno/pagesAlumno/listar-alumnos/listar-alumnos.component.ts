import { Component } from '@angular/core';
import { Alumno } from '../../../../modelos/usuario';
import { AlumnosService } from '../../../../services-administrativo/usuarios.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-listar-alumnos',
  imports: [CommonModule],
  templateUrl: './listar-alumnos.component.html',

})
export default class ListarAlumnosComponent {
  [x: string]: any;
  alumnos: Alumno[];
  constructor(private alumnosServicio: AlumnosService) { }

  ngOnInit() {
    //cargamos los datos
    this.obtenerAlumnos();
  }
  private obtenerAlumnos() {
    //aqui consumimos los datos del observable (se suscribe al servicio de listar)
    this.alumnosServicio.listarAlumnos().subscribe(
      alumnos => {
        this.alumnos = alumnos
      }
    );
  }
}