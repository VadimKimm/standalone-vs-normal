import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

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
    // path: "admin", loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent)
  }
];
