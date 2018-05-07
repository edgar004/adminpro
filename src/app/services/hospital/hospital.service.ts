import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
@Injectable()
export class HospitalService {
cargado:boolean=true
  constructor(private _http:HttpClient,private _usu:UsuarioService) {

   }

   cargarHospitales(desde:number=0){
   	let url=URL_SERVICES+'/hospital?desde='+desde
   	return this._http.get(url)
   	

   }

   borrarHospital(id:string){
  	let url=URL_SERVICES+ '/hospital/' +id+ '?token=' +this._usu.token
  	return this._http.delete(url)	
   }

   crearHospital(nombre:string){
     let url=URL_SERVICES+'/hospital?token=' +this._usu.token
     return this._http.post(url,{nombre:nombre})
   }
actualizarHospital(hospital){
 let url=URL_SERVICES+'/hospital/' +hospital._id+ '?token=' +this._usu.token
 return this._http.put(url,hospital)
}

buscarHospital(termino:string){
  let url=URL_SERVICES+'/busqueda/coleccion/hospital/'+ termino
  return this._http.get(url)
}


obtenerHospital(id:string){
   let url=URL_SERVICES+'/hospital/' +id
  return this._http.get(url)
  .map((res:any)=>{
    return res.hospital
  })
}



}
