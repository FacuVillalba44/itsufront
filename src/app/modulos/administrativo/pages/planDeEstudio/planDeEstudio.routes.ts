import { Routes } from '@angular/router';
import PlanDeEstudioComponent from './planDeEstudio-layout/planDeEstudio-layout.component';
import ListarPlanDeEstudioComponent from './pagesPlanDeEstudio/listarPlanDeEstudio/listarPlanDeEstudio.component';
import AgregarPlanDeEstudioComponent from './pagesPlanDeEstudio/agregarPlanDeEstudio/agregar-plan-de-estudio.component';
import EditarPlanDeEstudioComponent from './pagesPlanDeEstudio/editarPlanDeEstudio/editar-pland-de-estudio.component';


export const PLANES_ROUTES: Routes = [
    {path:'', component: PlanDeEstudioComponent,
        children: [
            { path: 'listar', component: ListarPlanDeEstudioComponent },
            { path: 'agregar', component: AgregarPlanDeEstudioComponent },
            { path: 'editar/:id', component: EditarPlanDeEstudioComponent }
        ]
    },
]