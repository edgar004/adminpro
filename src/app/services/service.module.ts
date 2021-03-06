import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {AdminGuard,MedicoService,HospitalService,SettingsService,SubirArchivoService,SharedService,SidebarService,UsuarioService,LoginGuardGuard} from './service.index';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
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
SubirArchivoService,
ModalUploadService,
HospitalService,
MedicoService,
AdminGuard

  ],
  declarations: []
})
export class ServiceModule { }
