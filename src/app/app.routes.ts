import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Cambia la ruta al nuevo guard

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modulos/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modulos/administrativo/admin.routes').then(m => m.ADMIN_ROUTES),
    canActivate: [AuthGuard] // Usa el nuevo guard
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