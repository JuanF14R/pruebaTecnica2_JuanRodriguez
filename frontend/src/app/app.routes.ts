import { Routes } from '@angular/router';

import { InterfazEmpleadosComponent } from './pages/interfaz-empleados/interfaz-empleados.component';

export const routes: Routes = [

    {path: '/empleados', component: InterfazEmpleadosComponent, title: 'Empleados'}
];
