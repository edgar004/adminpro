
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './../pages/pages.component';
import { PAGUES_ROUTES } from './/pages.routes';
import { SharedModule } from '../shared/Shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    ],
    imports:[
    SharedModule,
    PAGUES_ROUTES

    ]
})

export class PagesModule { }