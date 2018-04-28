import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {SettingsService,SubirArchivoService,SharedService,SidebarService,UsuarioService,LoginGuardGuard} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
SettingsService,
SharedService,
SidebarService,
UsuarioService,
LoginGuardGuard,
SubirArchivoService

  ],
  declarations: []
})
export class ServiceModule { }
