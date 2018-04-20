import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable()
export class SettingsService {
AJUSTES:ajuste={
temaUrl:'assets/css/colors/default.css',
tema:'default'
}
  constructor(@Inject(DOCUMENT) private _document) {
  	this.cargarAjustes()
   }

  guardarAjustes(){
  	localStorage.setItem("ajuste",JSON.stringify(this.AJUSTES))

  }
  cargarAjustes(){
  	if(localStorage.getItem("ajuste")){
  		this.AJUSTES=JSON.parse(localStorage.getItem("ajuste"))
  		this.aplicarTema(this.AJUSTES.tema)
  	}
  }

  aplicarTema(Tema){
  	let  url=`assets/css/colors/${Tema}.css`
  	this._document.getElementById('tema').setAttribute('href',url)
  	this.AJUSTES.tema=Tema
    this.AJUSTES.temaUrl=url
    this.guardarAjustes()
  }

}

interface ajuste{
temaUrl:String,
tema:String
}
