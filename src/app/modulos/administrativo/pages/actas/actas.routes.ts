import { Routes } from '@angular/router';
import { ActasLayoutComponent } from './actas-layout/actas-layout.component';
import ListarActaComponent from './pages/listar-acta/listar-acta.component';
import CrearActaComponent from './pages/crear-acta/crear-acta.component';
import EditarActaComponent from './pages/editar-acta/editar-acta.component';


export const ACTAS_ROUTES: Routes = [

    {//al cargar la ruta base de alumnos carga el layout de alumnos y en diferido sus rutas hijas
        path: '', component: ActasLayoutComponent,
        children: [
            { path: 'listar', component: ListarActaComponent  },
            { path: 'crear', component:  CrearActaComponent},
            { path: 'editar/:id', component: EditarActaComponent  }
        ]
    },

]