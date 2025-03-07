import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importamos CommonModule
import { CarreraService } from '../../../../services-administrativo/carrera.service';
import { Carrera } from '../../../../modelos/carrera';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-carrera',
  standalone: true, // IndRouterModuleicamos que es un componente standalone
  imports: [CommonModule, RouterModule], // Agregamos CommonModule aquí
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export default class ListarCarreraComponent implements OnInit {
  carreras: Carrera[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private carreraService: CarreraService) {}

  ngOnInit(): void {
    this.cargarCarreras();
  }

  cargarCarreras(): void {
    this.loading = true;
    this.carreraService.listarCarreras().subscribe({
      next: (data: Carrera[]) => {
        this.carreras = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las carreras. Intenta de nuevo más tarde.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}