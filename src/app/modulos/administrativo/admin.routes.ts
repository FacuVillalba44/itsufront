import { Routes } from '@angular/router';
import ListarAlumnosComponent from './pages/listar-alumnos/listar-alumnos.component';
import LayoutAdminComponent from './layout-admin/layout-admin.component';

export const ADMIN_ROUTES: Routes = [{
    //al cargar la ruta base carga el layout de admin y en diferido sus rutas hijas
    path: '', component: LayoutAdminComponent,
    children: [
        
        { path: 'listar-alumnos', component: ListarAlumnosComponent }
    ]
}
]