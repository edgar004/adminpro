
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './../pages/pages.component';
import { PAGUES_ROUTES } from './/pages.routes';
import { SharedModule } from '../shared/Shared.module';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent
  
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    ],
    imports:[
    SharedModule,
    PAGUES_ROUTES,
    FormsModule,
    ChartsModule

    ]
})

export class PagesModule { }