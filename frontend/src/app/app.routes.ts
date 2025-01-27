import { Routes } from '@angular/router';

import { InterfazEmpleadosComponent } from './pages/interfaz-empleados/interfaz-empleados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InterfazDepartamentosComponent } from './pages/interfaz-departamentos/interfaz-departamentos.component';


export const routes: Routes = [

    {path: 'empleados', component: InterfazEmpleadosComponent, title: 'Empleados'},
    {path: '', component: InicioComponent, title: 'Inicio'},
    {path: 'departamentos', component: InterfazDepartamentosComponent, title: 'Departamentos'}
];
