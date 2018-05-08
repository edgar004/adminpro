import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private _usu:UsuarioService){

	}
  canActivate() {
  	if(this._usu.usuario.role=='ADMIN_ROLE'){
  		    return true;
  		}else{
  			console.log('Bloqueado por el admin')
        this._usu.logout()
  			return false
  		}

  }
}
