
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {path:'', component:MainComponent},
      {path:'form', component:FormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
