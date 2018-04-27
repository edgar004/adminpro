import { Component, OnInit } from '@angular/core';
declare function init_plugins()
import {FormGroup,FormControl,Validators} from '@angular/forms'
import Swal from 'sweetalert2'
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
forma:FormGroup;
  constructor(public _usuario:UsuarioService,private _router:Router) { }

  sonIguales(campo1:string,campo2:string){
  	return (group:FormGroup)=>{
  		let pass1=group.controls[campo1].value
  		let pass2=group.controls[campo2].value
  
  		if(pass1===pass2){
  			return null
  		}

  		return {
  			sonIguales:true
  		}
  	}
  }

  ngOnInit() {
  		init_plugins()

  		this.forma=new FormGroup({
  		nombre:new FormControl('',Validators.required),
  		correo:new FormControl('',[Validators.required,Validators.email]),
  		password:new FormControl('',Validators.required),
  		password2:new FormControl('',Validators.required),
  		condiciones:new FormControl(false),
  		},{validators:this.sonIguales('password','password2')});
  }

  registrarUsuario(){

  	if(this.forma.invalid){
  		return
  	}

  	if(this.forma.value.condiciones==false){
  		Swal("Importante", "Debe selecionar las condiciones", "warning");
  		
  		return 
  	}
let usuario= new Usuario(
  this.forma.value.nombre,
  this.forma.value.correo,
  this.forma.value.password
  )


    this._usuario.crearUsuario(usuario).subscribe(res=>{
  
      this._router.navigate(['/login'])
    })

  }

}
