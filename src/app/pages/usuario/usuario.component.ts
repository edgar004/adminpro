import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
usuarios:Usuario[]=[]
desde:number=0
totalRegistro:number=0

cargando:boolean=true
  constructor(private _usu:UsuarioService,private _modal:ModalUploadService) { }

  ngOnInit() {
  	this.cargarUsuarios()

    this._modal.notificacion.subscribe(res=>this.cargarUsuarios())
  }


  mostrarModal(id:string){
    this._modal.mostrarModal('usuarios',id)

  }

  cargarUsuarios(){
  	this.cargando=true
  	this._usu.cargarUsuarios(this.desde).subscribe((res:any)=>{
  		this.totalRegistro=res.total
  		this.usuarios=res.usuario
  		this.cargando=false
  		if(this.usuarios.length<=0 && this.totalRegistro>0){
  			this.desde=0
  			this.cargarUsuarios()
  		}
  	})

  }
 cambiarDesde(valor:number){
 	let desde=this.desde+valor
 	if(desde>=this.totalRegistro){
 		return
 	}

 	if(desde<0){
 		return
 	}

 	this.desde+=valor
 	this.cargarUsuarios()
 }

 buscarUsuario(termino:string){
 	
 	  	if(termino.length<=0){
 	  		this.cargarUsuarios()
 	  		return
 	  	}

 	  	  	this.cargando=true
 	this._usu.buscarUsuarios(termino).subscribe((res:any)=>{
 		this.usuarios=res
 		this.cargando=false
 	})

 }

 borrarUsuario(usuario:Usuario){
 	if(usuario._id==this._usu.usuario._id){
 		Swal('No puede borrar usuario','No se puede borrar a si mismo','error')
 		return
 	}

 	Swal({
  title: '¿Estas seguro?',
  text: "Esta a punto de borrar a " + usuario.nombre,
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Borrar!'
}).then((borrar) => {
  if (borrar.value) {
  	this._usu.borrarUsuario(usuario._id).subscribe(res=>{
  		Swal('Usuario borrado','El usuario a sido eliminado correctamente','success')
  			this.cargarUsuarios()
  	})
  
  }
})


 }


 guardarUsuario(usuario:Usuario){
 	this._usu.actuazarUsuario(usuario).subscribe()
 }


}
