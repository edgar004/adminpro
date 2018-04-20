import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SettingsService} from './../../services/service.index';
@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,private ajustes:SettingsService) {

 

   }

  ngOnInit() {
    this.colocarCheck()
  }
  cambiarColor(color,link){
  	this.aplicarCheck(link)
    this.ajustes.aplicarTema(color)

  	
  }
  aplicarCheck(link){
  	let selectores:any =document.getElementsByClassName('selector')
  	for (let ref of selectores){
     
  		ref.classList.remove('working')
  	}
  	link.classList.add('working')
  }

  colocarCheck(){

     let selectores: any = document.getElementsByClassName('selector');
  

     let tema = this.ajustes.AJUSTES.tema




    for (let ref of selectores){
      if(ref.getAttribute('data-theme')==tema){
         ref.classList.add('working')
        break;
      }

   

    }



 

  }

}
