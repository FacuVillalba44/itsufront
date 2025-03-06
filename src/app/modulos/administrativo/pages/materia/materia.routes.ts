import { Routes } from '@angular/router';
import { MateriaLayoutComponent } from './materia-layout/materia-layout.component';
import { AgregarMateriaComponent } from './pagesMateria/agregar-materia/agregar-materia.component';
import { ListarMateriaComponent } from './pagesMateria/listar-materia/listar-materia.component';
import { EditarMateriaComponent } from './pagesMateria/editar-materia/editar-materia.component';
export const MATERIA_ROUTES: Routes = [
    {
        path:'', component: MateriaLayoutComponent,
        children: [//si no se definen como rutas hijas van a tapar el contenido de carrera layout
            { path: 'listar', component: ListarMateriaComponent },
            { path: 'agregar', component: AgregarMateriaComponent },
            { path: 'editar/:id', component: EditarMateriaComponent }
        ]
    }
]