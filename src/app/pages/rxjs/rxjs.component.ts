import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {
subscription:Subscription
  constructor() { 


  	this.subscription=this.regresaObservable().subscribe( numero=>
  		console.log(numero),
  		error=>console.error(error),
  		()=>console.log("El observador termino")
  	)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe()

  }

  regresaObservable(){

  	return new Observable( Observable=>{
  		let contador=0 
  		let invervalo = setInterval(()=>{
  			contador++
  			console.log(contador)
  			Observable.next(contador)

  			// if(contador==3){
  			// 	clearInterval(invervalo)
  			// 	Observable.complete()
  			// }

  			// if(contador==2){
  			// 			clearInterval(invervalo)
  			// 	Observable.error("Auxilio")
  			// }
  		},500)
  	}).retry(2)
  	.map((res:any)=>{
  		return res.valor

  	}).filter((valor,index)=>{
  		if(valor % 2 ==1){
  			return true;
  		}else{
  			return false;
  		}

  
  	})
  }



}
