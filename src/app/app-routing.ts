
import { Routes } from '@angular/router';
import { HomeComponent } from './views/user/home/home.component';
import { AdminDataComponent } from './views/admin/admin-data/admin-data.component';
import { AdminLoginComponent } from './views/admin/admin-login/admin-login.component';

export const rootRouterConfig: Routes = [
    {
        path: 'admin',
        component: AdminLoginComponent,

    },
    {
        path: 'data',
        component: AdminDataComponent,

    },

    {
        path: '',
        component: HomeComponent
    }
];
