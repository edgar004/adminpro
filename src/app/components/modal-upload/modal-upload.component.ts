import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
imagenSubir:File
imagenTem:string
  constructor(private _subirArchivo:SubirArchivoService,private _modal:ModalUploadService) { }

  ngOnInit() {
  }

  cerralModal(){
    this.imagenSubir=null
    this.imagenTem=null
    this._modal.ocultarModal()
  }

  seleccionImagen(archivo:File){
    if(!archivo){
      this.imagenSubir=null
      return
    }
    if(archivo.type.indexOf('image')<0){
      this.imagenSubir=null
      Swal('Solo imagen','El archivo seleccionado no es una imagen','error')
      return
    }
    this.imagenSubir=archivo
    let reader = new FileReader()
    let urlImagenTemp=reader.readAsDataURL(archivo)
    reader.onloadend=()=>{
      this.imagenTem=reader.result
    
    }
    
  }

  subirImagen(){
    this._subirArchivo.subirArchivo(  this.imagenSubir,this._modal.tipo,this._modal.id)
    .then((resp)=>{
        this._modal.notificacion.emit(resp)
        this._modal.ocultarModal()
    }).catch(err=>{
      console.log("Error en la carga")
    })
  }

}
