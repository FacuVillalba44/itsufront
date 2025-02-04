import { Routes } from '@angular/router';
import LayoutAdminComponent from './modulos/administrativo/layout-admin/layout-admin.component';

export const routes: Routes = [

  {//de momento, al cargar la ruta base, importa las rutas de admin route y muestra el side
    path: '',
    loadChildren: () => import('./modulos/administrativo/admin.routes').then(m => m.ADMIN_ROUTES),
  }
];
