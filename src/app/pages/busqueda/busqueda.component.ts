import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';
@Component({

  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
usuarios:Usuario[]=[]
medicos:Medico[]=[]
hospitales:Hospital[]=[] 
  constructor(private _activated:ActivatedRoute,private _http:HttpClient) {
  		this._activated.params.subscribe(res=>{
  			this.buscar(res['termino'])
  		})
   }

  ngOnInit() {
  }

  buscar(termino:string){
  	let url=URL_SERVICES+ '/busqueda/todo/' +termino
  	this._http.get(url).subscribe((resp:any)=>{
  		this.hospitales=resp.hospitales
  		this.medicos=resp.medicos
  		this.usuarios=resp.usuarios
  	})
  }

}
