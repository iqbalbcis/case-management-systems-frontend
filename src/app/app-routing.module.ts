import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { SuccessMessageComponent } from './component/success-message/success-message.component';
import { CreateCaseComponent } from './component/create-case/create-case.component';
import { ViewCaseComponent } from './component/view-case/view-case.component';
import { UpdateCaseComponent } from './component/update-case/update-case.component';

// need import AppRoutingModule in app.module.ts and need to in app.component.ts -> <router-outlet></router-outlet>
const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DashboardComponent},
  {path:'successmessage', component: SuccessMessageComponent},
  {path:'create-case', component: CreateCaseComponent},
  {path:'view-case/:caseId', component: ViewCaseComponent},
  {path:'update-case/:caseId', component: UpdateCaseComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
