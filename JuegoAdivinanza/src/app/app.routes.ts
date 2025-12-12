import { Routes } from '@angular/router';

//añadimos el import del configurador del formulario
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    { path: '', component: Formulario },
];
