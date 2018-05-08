import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Router } from '@angular/router';
import   'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import Swal from 'sweetalert2'
@Injectable()
export class UsuarioService {
usuario:Usuario
token:string
menu:any[]=[]
  constructor(private _http:HttpClient,private _router:Router,private _subir:SubirArchivoService) {
  	
   }
   guardarStorage(id:string,token:string,usuario:Usuario,menu:any){
    localStorage.setItem("id",id)
  localStorage.setItem("token",token)
  localStorage.setItem("usuario",JSON.stringify(usuario))
    localStorage.setItem("menu",JSON.stringify(menu))
  this.usuario=usuario
  this.token=token
  this.menu=menu
   }

 cargarStorare(){
   if(localStorage.getItem("token")){
     this.token=localStorage.getItem("token")
     this.usuario=JSON.parse(localStorage.getItem("usuario"))
     this.menu=JSON.parse(localStorage.getItem("menu"))

   }else{
     this.token=''
     this.usuario=null
     this.menu=[]
   }
 }

loginGoogle(token:string){
  let url=URL_SERVICES+"/login/google"
  return this._http.post(url,{token:token})
  .map((res:any)=>{
   this.guardarStorage(res.id,res.token,res.usuario,res.menu)
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
   this.guardarStorage(res._id,res.token,res.usuario,res.menu)
    return  true
}).catch( err=>{
  console.log(err)
  Swal('Error en el login',err.error.mensaje,'error')
  return Observable.throw(err)

})


}


logout(){
  this.usuario=null
  this.token=''
  localStorage.removeItem("token")
  localStorage.removeItem("usuario")
    localStorage.removeItem("menu")
  this._router.navigate(['/login'])
}

   crearUsuario(usuario:Usuario){
   	let url=`${URL_SERVICES}/usuario`
   return 	this._http.post(url,usuario)
   .map((resp:any)=>{
   		Swal("Usuario creado",usuario.email,'success');
   		return resp.usuario

   }).catch(err=>{
       Swal(err.error.mensaje,err.error.errors.message,'error')
       return Observable.throw(err)

   })


   }

   actuazarUsuario(usuario:Usuario){
       let url=`${URL_SERVICES}/usuario/${usuario._id}`
       url+='?token='+this.token
       return this._http.put(url,usuario)
       .map((res:any)=>{
         if(this.usuario._id==this.usuario._id){
           this.guardarStorage(res._id,this.token,res.usuario,this.menu)
         }
          
          Swal("Usuario actualizado " , res.usuario.nombre,'success')
          return true

       })
   }


    cambiarImagen(archivo:File,id:string){
    this._subir.subirArchivo(archivo,'usuarios',id)
    .then((rep:any)=>{
      this.usuario.img=rep.usuarioActualizado.img
      Swal('Imagen actualizada',this.usuario.nombre,'success')
      this.guardarStorage(rep._id,this.token,this.usuario,this.menu)
    

    }).catch(rep=>{
    })

  }


  cargarUsuarios(desde:number=0){
    let url=URL_SERVICES+'/usuario?desde='+desde
    return this._http.get(url)

  }


  buscarUsuarios(termino:string){

      let url=URL_SERVICES+'/busqueda/coleccion/usuario/'+termino

      return this._http.get(url)
      .map((resp:any)=>resp.usuario)

  }

  borrarUsuario(id:string){
    let url=URL_SERVICES+ '/usuario/' +id+ '?token=' +this.token
    return this._http.delete(url)

  }


}
