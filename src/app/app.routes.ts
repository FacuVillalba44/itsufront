import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modulos/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modulos/administrativo/admin.routes').then(m => m.ADMIN_ROUTES),
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./modulos/estudiantes/estudiantes.routes').then(m => m.ESTUDIANTES_ROUTES),
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];