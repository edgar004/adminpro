import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/service.index';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
usuario:any
  constructor(private _sidebar:SidebarService,private _usu:UsuarioService) {


  	this._usu.cargarStorare()

   }

  ngOnInit() {
  	this.usuario=this._usu.usuario
  	this._sidebar.cargarMenu()
  }

}
