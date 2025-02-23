import { Routes } from '@angular/router';
import ListarAlumnosComponent from './pagesAlumno/listar-alumnos/listar-alumnos.component';
import AlumnoLayoutComponent from './alumno-layout/alumno-layout.component';
import  AgregarAlumnoComponent  from './pagesAlumno/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './pagesAlumno/editar-alumno/editar-alumno.component';

export const ALUMNO_ROUTES: Routes = [

    {//al cargar la ruta base de alumnos carga el layout de alumnos y en diferido sus rutas hijas
        path: '', component: AlumnoLayoutComponent,
        children: [
            { path: 'listar', component: ListarAlumnosComponent },
            { path: 'agregar', component: AgregarAlumnoComponent },
            { path: 'editar/:id', component: EditarAlumnoComponent }
        ]
    },

]