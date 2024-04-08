import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('../pages/landing/landing.component').then(c => c.LandingComponent)
    },
    {
        path: '',
        loadComponent: () => import('../layout/app.layout.component').then(c => c.AppLayoutComponent),
        children: [
            {
                path: "button",
                loadComponent: () => import('../pages/button/button.component').then(c => c.ButtonComponent)
            },
        ]
    }
];
