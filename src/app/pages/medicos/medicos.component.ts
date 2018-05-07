import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/service.index';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
desde:number=0
medicos:any[]=[]
totalMedicos:number=0
  constructor(private _medico:MedicoService) { }

  ngOnInit() {
  	this.cargarMedicos()
  }

  cargarMedicos(){
  	this._medico.cargarMedicos(this.desde).subscribe((res:any)=>{
  			this.medicos=res.medico
  			this.totalMedicos=res.total

  	})
  }




  borrarMedico(id){
    this._medico.borrarMedico(id).subscribe(res=>this.cargarMedicos())

  }

  buscarMedico(termino:string){
  	if(termino.length<=0){
  		this.cargarMedicos()
  		return
  	}

  	this._medico.buscarMedicos(termino).subscribe(res=>{
  		this.medicos=res
  	})

  }

}
