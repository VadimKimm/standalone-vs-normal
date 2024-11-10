import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AdminComponent } from './modules/admin/admin.component';
import { UserComponent } from './modules/user/user.component';

export const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "user", component: UserComponent
  },
  {
    path: "admin", component: AdminComponent
    // path: "admin", loadComponent: () => import('./modules/admin/admin.component').then(m => m.AdminComponent)
  }
];
