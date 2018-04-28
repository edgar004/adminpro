import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
USUARIO:any
  constructor(private _usu:UsuarioService) { 
  	this._usu.cargarStorare()
  }

  ngOnInit() {
  	this.USUARIO=this._usu.usuario

  }

  

}
