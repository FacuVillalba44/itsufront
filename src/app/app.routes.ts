import { Routes } from '@angular/router';
import LayoutAdminComponent from './modulos/administrativo/layout-admin/layout-admin.component';

export const routes: Routes = [
    {
        path: '',        
        loadComponent:()=>import('./modulos/administrativo/layout-admin/layout-admin.component'),
        children:[
          {
            path:'alumnos',
            loadComponent: () => import('./modulos/administrativo/pages/listar-alumnos/listar-alumnos.component')
          },
          {
            path:'',
            redirectTo:'alumnos',
            pathMatch:'full'
          }
        ]
      }
];
