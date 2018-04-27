import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
declare function init_plugins()
declare const gapi:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.components.css']
})
export class LoginComponent implements OnInit {
recuerdame:boolean=false
email:String=''
auth2:any
  constructor(public _router:Router,private _usu:UsuarioService) { }

  ngOnInit() {
  	init_plugins()
    this.googleInit()
    if(localStorage.getItem("email")){
      this.email=localStorage.getItem("email")
      this.recuerdame=true

    }


  }
  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2=gapi.auth2.init({
        client_id:'1085070141452-t2t6f4tbjcev6v95atsejjns9leqhg3n.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
      this.attachSignin(document.getElementById('btn_google'))

    });
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element,{},(googleUser)=>{
      // let profile=googleUser.getBasicProfile()
      // console.log(profile)
      let token=googleUser.getAuthResponse().id_token
      
      this._usu.loginGoogle(token).subscribe(()=>window.location.href="#/dashboard")

    })
  }

  ingresar(forma:NgForm){
    if(forma.invalid){
      return
    }
    let usuario=new Usuario(null,forma.value.email,forma.value.password)
    this._usu.login(usuario,this.recuerdame).subscribe(res=>this._router.navigate(['/dashboard']))

 
  	//this._router.navigate(['/dashboard'])
  }

}
