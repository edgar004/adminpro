import { Routes,RouterModule} from '@angular/router';
import { ProgressComponent } from './../pages/progress/progress.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../login/register/register.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Graficas1Component } from './../pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './../shared/nopagefound/nopagefound.component';
import { PagesComponent } from './../pages/pages.component';
import { AccoutSettingsComponent } from './../pages/accout-settings/accout-settings.component';
import { UsuarioComponent } from './../pages/usuario/usuario.component';
import { HospitalesComponent } from './../pages/hospitales/hospitales.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import {AdminGuard  } from '../services/service.index';

import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { ProfileComponent } from './profile/profile.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const pagesRoutes:Routes=[
{
path:'',component:PagesComponent,canActivate:[LoginGuardGuard],children:[
{path:'dashboard',component:DashboardComponent,data:{titulo:'Dashboard'}},
{path:'progress',component:ProgressComponent,data:{titulo:'ProgressBars'}},
{path:'graficas1',component:Graficas1Component,data:{titulo:'Graficas'}},
{path:'accout-settings',component:AccoutSettingsComponent,data:{titulo:'Ajuste de tema'}},
{path:'perfil',component:ProfileComponent,data:{titulo:'perfil de usuario'}},
{path:'busqueda/:termino',component:BusquedaComponent,data:{titulo:'Buscador'}},
{path:'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
{path:'rxjs',component:RxjsComponent,data:{titulo:'RxJs'}},
//Mantenimiento
{path:'usuarios',component:UsuarioComponent,
canActivate:[AdminGuard],
data:{titulo:'Mantenimientos de usuarios'}},
{path:'hospitales',component:HospitalesComponent,data:{titulo:'Mantenimientos de hospitales'}},
{path:'medicos',component:MedicosComponent,data:{titulo:'Mantenimientos de medicos'}},
{path:'medico/:id',component:MedicoComponent,data:{titulo:'Actualizar medicos'}},
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
]

}

];

export const PAGUES_ROUTES=RouterModule.forRoot(pagesRoutes)