import { Routes,RouterModule} from '@angular/router';
import { ProgressComponent } from './../pages/progress/progress.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../login/register/register.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Graficas1Component } from './../pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './../shared/nopagefound/nopagefound.component';
import { PagesComponent } from './../pages/pages.component';
import { AccoutSettingsComponent } from './../pages/accout-settings/accout-settings.component';
const pagesRoutes:Routes=[
{
path:'',component:PagesComponent,children:[
{path:'dashboard',component:DashboardComponent},
{path:'progress',component:ProgressComponent},
{path:'graficas1',component:Graficas1Component},
{path:'accout-settings',component:AccoutSettingsComponent},
 {path:'',redirectTo:'/dashboard',pathMatch:'full'},
]

}

];

export const PAGUES_ROUTES=RouterModule.forRoot(pagesRoutes)