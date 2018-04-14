import { Component, OnInit,Input,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
@ViewChild('txtProgress') txtProgress:ElementRef
@Input()progreso:number=50
@Input()leyenda:String='Leyanda'
@Output()cambioValor:EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

   cambiarValor(valor){

  		this.progreso+=valor
  		if(this.progreso>100){
  			this.progreso=100
  		}else if(this.progreso<0){
  			this.progreso=0
  		}
      this.cambioValor.emit(this.progreso)
this.txtProgress.nativeElement.focus()
  	

  	
  	 

  }
  onChanges(newValor){
    if(newValor>=100){
      this.progreso=100
    }else if(newValor <=0){
      this.progreso=0
    }else{
      this.progreso=newValor
    }
    this.txtProgress.nativeElement.value=this.progreso
    this.cambioValor.emit(this.progreso)

  }

}
