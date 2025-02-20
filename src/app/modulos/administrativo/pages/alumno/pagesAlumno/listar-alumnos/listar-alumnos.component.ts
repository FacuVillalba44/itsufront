import { Component } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario';
import { UsuarioService } from '../../../../services-administrativo/usuario.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-listar-alumnos',
  imports: [CommonModule],
  templateUrl: './listar-alumnos.component.html',

})
export default class ListarAlumnosComponent {
  [x: string]: any;
  usuarios: Usuario[];
  constructor(private usuariosServicio: UsuarioService) { }

  ngOnInit() {
    //cargamos los datos
    this.obtenerAlumnos();
  }
  private obtenerAlumnos() {
    //aqui consumimos los datos del observable (se suscribe al servicio de listar)
    this.usuariosServicio.listarAlumnos().subscribe(
      usuarios => {
        this.usuarios = usuarios
      }
    );
  }
}