import { Routes } from '@angular/router';

import LayoutAlumnoComponent from './layout-alumno/layout-alumno.component';

import { RegistroMesasExamenesComponent } from './pages/registro-mesas-examenes/registro-mesas-examenes.component';
import { HistorialInscripcionesComponent } from './pages/historial-inscripciones/historial-inscripciones.component';

export const ESTUDIANTES_ROUTES: Routes = [
    {//al cargar la ruta base carga el layout de alumnos y en diferido sus rutas hijas
        path: '', component: LayoutAlumnoComponent,
        children:[
            {
                path:'inscripciones', component:RegistroMesasExamenesComponent               
            },
            {
                path:'historial', component:HistorialInscripcionesComponent               
            },
       ]
    }
]
