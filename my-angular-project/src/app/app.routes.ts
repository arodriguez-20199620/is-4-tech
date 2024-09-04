import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'ejercicio-1',
        loadComponent: () => import('../components/ejercicio-1/ejercicio-1.component')
    },
    {
        path: 'ejercicio-2',
        loadComponent: () => import('../components/ejercicio-2/ejercicio-2.component')
    },
    {
        path: '',
        redirectTo: '/ejercicio-1',
        pathMatch: 'full'
    }
];
