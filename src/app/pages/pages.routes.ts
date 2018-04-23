import { Routes,RouterModule} from '@angular/router';
import { ProgressComponent } from './../pages/progress/progress.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../login/register/register.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Graficas1Component } from './../pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './../shared/nopagefound/nopagefound.component';
import { PagesComponent } from './../pages/pages.component';
import { AccoutSettingsComponent } from './../pages/accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
const pagesRoutes:Routes=[
{
path:'',component:PagesComponent,children:[
{path:'dashboard',component:DashboardComponent,data:{titulo:'Dashboard'}},
{path:'progress',component:ProgressComponent,data:{titulo:'ProgressBars'}},
{path:'graficas1',component:Graficas1Component,data:{titulo:'Graficas'}},
{path:'accout-settings',component:AccoutSettingsComponent,data:{titulo:'Ajuste de tema'}},
{path:'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
{path:'rxjs',component:RxjsComponent,data:{titulo:'RxJs'}},
 {path:'',redirectTo:'/dashboard',pathMatch:'full'},
]

}

];

export const PAGUES_ROUTES=RouterModule.forRoot(pagesRoutes)