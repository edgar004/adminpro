import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
hospitales:any[]=[]
desde:number=0
totalesHospital:number=0
  constructor(private _hospital:HospitalService,private _modal:ModalUploadService) { }

  ngOnInit() {
  	this.cargarHospitales()	
    this._modal.notificacion.subscribe(res=>this.cargarHospitales())
  }

  cargarHospitales(){
  	this._hospital.cargarHospitales(this.desde).subscribe((res:any)=>{
  		this.hospitales=res.hospitales
  		this.totalesHospital=res.total
       if(this.hospitales.length<=0 && this.totalesHospital>0){
        this.desde=0
        this.cargarHospitales()
      }
  	});

  }

  cambiarDesde(valor){

  	let desde=this.desde+valor
  	if(desde<0){
  		return
  	}

  	if(desde>=this.totalesHospital){
  		return
  	}

  	this.desde=desde
  		this.cargarHospitales()	



  }

  eliminarHospital(hospital:any){
  		Swal({
  title: '¿Estas seguro?',
  text: "Esta a punto de borrar el " + hospital.nombre,
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Borrar!'
}).then((borrar) => {
  if (borrar.value) {
  		this._hospital.borrarHospital(hospital._id).subscribe(res=>{
  			Swal('Hospital borrado','El hospital ' + hospital.nombre+' se a borrado correctamten','success')
  		  this.cargarHospitales()
      })
  
  }
})
  }


crearHospital(){
 Swal({
  title: 'Registrar hospital',
  input: 'text',
  inputPlaceholder: 'Digite el nombre del hospital',
  showCancelButton: true,
  inputValidator: (value) => {
    if(value.length<=0){
         Swal('Error','El nombre del hospital no puede querdar vacio','error')
         return 
    }


   this._hospital.crearHospital(value).subscribe(res=>{
     Swal('Hospital creado','El hospital ' +value+' se a creado correctamente','success')
    this.cargarHospitales()
   })

    return ''
  }
})


}

actualizarHospital(hospital){
  if(hospital.nombre.length<=0){
   Swal('Error','El nombre del hospital no puede querdar vacio','error')
   return
  }

    this._hospital.actualizarHospital(hospital).subscribe(res=>{
         Swal('Actualizado','El hospital se ha actualizado correctamente','success')
    })




}

buscarHospital(termino:string){
  if(termino.length<=0){
    this.cargarHospitales()
    return

  }

   this._hospital.buscarHospital(termino).subscribe((res:any)=>{
     this.hospitales=res.hospital
   })


}

}
