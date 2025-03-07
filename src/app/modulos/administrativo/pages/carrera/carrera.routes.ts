import { Routes } from '@angular/router';
import CarreraLayoutComponent  from './carrera-layout/carrera-layout.component';
import AgregarCarreraComponent from './pagesCarrera/agregar-carrera/agregar-carrera.component';
import ListarCarreraComponent  from './pagesCarrera/listar-carrera/listar-carrera.component';
import {EditarCarreraComponent}  from './pagesCarrera/editar-carrera/editar-carrera.component';
export const CARRERA_ROUTES: Routes = [
    {//al cargar la ruta base de carrera carga el layout de carrera y en diferido sus rutas hijas
        path: '', component: CarreraLayoutComponent,
        children: [//si no se definen como rutas hijas van a tapar el contenido de carrera layout
            { path: 'listar', component: ListarCarreraComponent },
            { path: 'agregar', component: AgregarCarreraComponent },
            { path: 'editar/:id', component: EditarCarreraComponent }
        ]
    },
]