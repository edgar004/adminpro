import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
USUARIO:any
  constructor(private _usu:UsuarioService,private _router:Router) { 
  	this._usu.cargarStorare()
  }

  ngOnInit() {
  	this.USUARIO=this._usu.usuario

  }


  buscar(termino:string){
  	this._router.navigate(['/busqueda',termino])
  }

  

}
