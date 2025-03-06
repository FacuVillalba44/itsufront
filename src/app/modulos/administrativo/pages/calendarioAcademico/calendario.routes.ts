import { Routes } from '@angular/router';
import CalendarioAcademicoLayoutComponent from './calendarioAcademicoLayout/calendario-academico-layout/calendario-academico-layout.component';
import ListarCalendarioComponent from './pagesCalendario/listar-calendario/listar-calendario.component';
import AgregarCalendarioComponent from './pagesCalendario/agregar-calendario/agregar-calendario.component';
import EditarAlumnoComponent from '../alumno/pagesAlumno/editar-alumno/editar-alumno.component';


export const CALENDARIO_ROUTES: Routes = [

    {//al cargar la ruta base de alumnos carga el layout de alumnos y en diferido sus rutas hijas
        path: '', component: CalendarioAcademicoLayoutComponent,
        children: [
            { path: 'listar', component: ListarCalendarioComponent },
            { path: 'agregar', component: AgregarCalendarioComponent },
            { path: 'editar/:id', component: EditarAlumnoComponent }
        ]
    },

]