import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2'
@Injectable()
export class MedicoService {

  constructor(private _http:HttpClient,private _usu:UsuarioService) {

   }


   cargarMedicos(desde:number=0){
   	let url=URL_SERVICES+'/medico'
   	return this._http.get(url)
   }



     buscarMedicos(termino:string){

      let url=URL_SERVICES+'/busqueda/coleccion/medico/' +termino

      return this._http.get(url)
      .map((resp:any)=>resp.medico)

  }

  borrarMedico(id:string){
    let url=URL_SERVICES+ '/medico/' +id
    url+='?token=' +this._usu.token
    return this._http.delete(url)
    .map(res=>{
      Swal('Medico borrado','Medico borrado correctamente','success')

      return res
    })
  }


  guardarMedico(medico){
    let url=URL_SERVICES+'/medico'
    if(medico._id){


       url+='/'+ medico._id+'?token='+this._usu.token
    return this._http.put(url,medico)
    .map((resp:any)=>{
 Swal('Medico modificando',medico.nombre,'success')
      return resp.medico

    })


    }else{
       url+='?token='+this._usu.token
    return this._http.post(url,medico)
    .map((resp:any)=>{
 Swal('Medico creando',medico.nombre,'success')
      return resp.medico

    })

    }


   
     }

     traeMedico(id:string){
       let url=URL_SERVICES+'/medico/' +id
       return this._http.get(url)
       .map((resp:any)=>{
          return   resp.medico
       })
     }

}
