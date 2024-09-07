import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: '',
                redirectTo: 'datepickers',
                pathMatch: 'full'
            },
            {
                path: 'datepickers',
                loadComponent: () => import('./dashboard/pages/datepickers/datepickers.component')
            },
            {
                path: 'button-fab',
                loadComponent: () => import('./dashboard/pages/button-fab/button-fab.component')
            },
            {
                path: 'table',
                loadComponent: () => import('./dashboard/pages/table/table.component')
            },
            {
                path: 'stepper',
                loadComponent: () => import('./dashboard/pages/stepper/stepper.component')
            },
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];
