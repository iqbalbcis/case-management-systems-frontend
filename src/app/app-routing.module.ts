import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { SuccessMessageComponent } from './component/success-message/success-message.component';

// need import AppRoutingModule in app.module.ts and need to in app.component.ts -> <router-outlet></router-outlet>
const routes: Routes = [
  //{path:'', component: LoginComponent },
  {path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DashboardComponent},
  {path:'successmessage', component: SuccessMessageComponent},
  {path:'**', component: ErrorComponent}
];

// otherwise redirect to home
// { path: '**', redirectTo: '' }

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
