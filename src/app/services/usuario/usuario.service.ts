import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Router } from '@angular/router';
import   'rxjs/add/operator/map';
import Swal from 'sweetalert2'
@Injectable()
export class UsuarioService {
usuario:Usuario
token:string
  constructor(private _http:HttpClient,private _router:Router,private _subir:SubirArchivoService) {
  	
   }
   guardarStorage(id:string,token:string,usuario:Usuario){
    localStorage.setItem("id",id)
  localStorage.setItem("token",token)
  localStorage.setItem("usuario",JSON.stringify(usuario))
  this.usuario=usuario
  this.token=token
   }

 cargarStorare(){
   if(localStorage.getItem("token")){
     this.token=localStorage.getItem("token")
     this.usuario=JSON.parse(localStorage.getItem("usuario"))

   }else{
     this.token=''
     this.usuario=null
   }
 }

loginGoogle(token:string){
  let url=URL_SERVICES+"/login/google"
  return this._http.post(url,{token:token})
  .map((res:any)=>{
   this.guardarStorage(res.id,res.token,res.usuario)
    return  true
})
}

login(usuario:Usuario,recuerdame:boolean=false){
  if(recuerdame){
    localStorage.setItem("email",usuario.email)
  }else{
    localStorage.removeItem("email")
  }
let url=URL_SERVICES+"/login"
return this._http.post(url,usuario)
.map((res:any)=>{
   this.guardarStorage(res._id,res.token,res.usuario)
    return  true
})
}


logout(){
  this.usuario=null
  this.token=''
  localStorage.removeItem("token")
  localStorage.removeItem("usuario")
  this._router.navigate(['/login'])
}

   crearUsuario(usuario:Usuario){
   	let url=`${URL_SERVICES}/usuario`
   return 	this._http.post(url,usuario)
   .map((resp:any)=>{
   		Swal("Usuario creado",usuario.email,'success');
   		return resp.usuario

   })


   }

   actuazarUsuario(usuario:Usuario){
       let url=`${URL_SERVICES}/usuario/${usuario._id}`
       url+='?token='+this.token
       return this._http.put(url,usuario)
       .map((res:any)=>{
          this.guardarStorage(res._id,this.token,res.usuario)
          Swal("Usuario actualizado " , res.usuario.nombre,'success')
          return true

       })
   }


    cambiarImagen(archivo:File,id:string){
    this._subir.subirArchivo(archivo,'usuarios',id)
    .then((rep:any)=>{
      this.usuario.img=rep.usuarioActualizado.img
      Swal('Imagen actualizada',this.usuario.nombre,'success')
      this.guardarStorage(rep._id,this.token,this.usuario)
    

    }).catch(rep=>{
    })

  }


}
