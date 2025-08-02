import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { ViewCase } from './components/view-case/view-case';
import { CreateCase } from './components/create-case/create-case';
import { UpdateCase } from './components/update-case/update-case';
import { Error } from './components/error/error';

export const routes: Routes = [
    {path:'', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'dashboard', component: Dashboard},
    {path:'create-case', component: CreateCase},
    {path:'view-case/:caseId', component: ViewCase},
    {path:'update-case/:caseId', component: UpdateCase},
    {path:'**', component: Error}
];
