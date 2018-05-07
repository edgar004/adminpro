import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/service.index';
import { MedicoService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';
import { Router,ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
hospitales:any[]=[]
medico:Medico=new Medico('','','','','')
hospital:Hospital=new Hospital('')
  constructor(private _hospital:HospitalService,private _medi:MedicoService,
    private _router:Router,private activated:ActivatedRoute,private _modal:ModalUploadService) {
      activated.params.subscribe(res=>{
          let id=res.id
          if(id!=='nuevo'){
              this.cargarMedico(id)
          }
      })

     }

  ngOnInit() {

  	this._hospital.cargarHospitales().subscribe((res:any)=>{
  	  this.hospitales=res.hospitales	
     
        this._modal.notificacion.subscribe((resp:any)=>{
            this.medico.img=resp.medicoActualizado.img
        })
  		

  	})

  }

  guardarMedico(f:NgForm){
    if(f.invalid){
      return
    }

    this._medi.guardarMedico(this.medico).subscribe((resp:any)=>{
        this.medico._id=resp._id
        this._router.navigate(['/medico',resp._id])
    })

  }

  cargarHospital(id:string){
    this._hospital.obtenerHospital(id).subscribe((res:any)=>{
        this.hospital=res
    })
  }

  cargarMedico(id:string){
    this._medi.traeMedico(id).subscribe(res=>{
      this.medico=res

      this.medico.hospital=res.hospital._id
      this.cargarHospital(this.medico.hospital)


    })
  }

  cambiarFoto(){
        this._modal.mostrarModal("medicos",this.medico._id)
  }

}
