import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo:string='usuario'): any {
    let url=URL_SERVICES+"/img"
    if(!img){
    	return url+'/usuarios/xxxx'
    }

    if(img.indexOf('https')>=0){
    	return img;
    }

   	 if(tipo=='usuario'){
   		 url+='/usuarios/'+img
    }else if(tipo=='medico'){
    	 url+='/medicos/'+img
    }

    else if(tipo=='hospital'){
     		url+='/hospitales/'+img
    }else{
    	console.log('Tipo de imagen no existe ')
    	url+='/usuarios/xxxx'
    }
    return url;
  }

}
