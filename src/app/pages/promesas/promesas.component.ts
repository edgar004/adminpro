import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 


this.contrarTres().then( mensaje=>{
	console.log('Termino',mensaje)
}).catch( error=>{
	console.error("Erro en la promesa")
})

  }

  ngOnInit() {
  }

  contrarTres():Promise<boolean>{

  	return  new Promise( (resolve, reject)=>{
	let contador=0
	let invertalo = setInterval( ()=>{
		contador++
		console.log(contador)
		if(contador==3){
			resolve( true )
			clearInterval(invertalo)
		}

	},1000 );
});




}



}