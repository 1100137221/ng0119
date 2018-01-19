import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, MainComponent, FormComponent]
})
export class DashboardModule { }
