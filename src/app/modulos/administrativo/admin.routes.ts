import { Routes } from '@angular/router';

import LayoutAdminComponent from './layout-admin/layout-admin.component';

export const ADMIN_ROUTES: Routes = [
    {//al cargar la ruta base carga el layout de admin y en diferido sus rutas hijas
        path: '', component: LayoutAdminComponent,
        children:[
            {
                path: 'alumnos',
                loadChildren: () => import('./pages/alumno/alumnos.routes').then(m => m.ALUMNO_ROUTES)
            },
            {
                path: 'carrera',
                loadChildren: () => import('./pages/carrera/carrera.routes').then(m => m.CARRERA_ROUTES)
            },
            {
                path: 'materia',
                loadChildren: () => import('./pages/materia/materia.routes').then(m => m.MATERIA_ROUTES)
            }
       ]
    }
]
