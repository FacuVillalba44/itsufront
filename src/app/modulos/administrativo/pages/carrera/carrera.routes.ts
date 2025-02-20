import { Routes } from '@angular/router';
import  CarreraLayoutComponent  from './carrera-layout/carrera-layout.component';
import { AgregarCarreraComponent } from './pagesCarrera/agregar-carrera/agregar-carrera.component';
export const CARRERA_ROUTES: Routes = [
    {path:'',component:CarreraLayoutComponent},
    {path:'agregar', component:AgregarCarreraComponent}
]