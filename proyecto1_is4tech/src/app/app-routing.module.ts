import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dogs', title: 'Perros',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
