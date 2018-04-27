import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {
	constructor(public _router:Router){

	}  

  canActivate(){

  	if(localStorage.getItem("token")){
  			return true
  	}else{
  		this._router.navigate(['/login'])
  			return false
  	}
  
  }
}
