import { Component, OnInit } from '@angular/core';
import { Router,ActivationEnd } from '@angular/router';
import { Title,Meta,MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
label:any =''
  constructor(private router:Router,private title:Title,public meta:Meta) { 

  	this.getData().subscribe(event=>{
  	this.label=event.titulo


           let metaTag:MetaDefinition={
           	name:'description',
           	content:this.label
           	

           }

  		this.title.setTitle(this.label)
  		this.meta.updateTag(metaTag)

  	})

  }

  ngOnInit() {
  }

  getData(){
  	return this.router.events.filter(enveto => enveto instanceof ActivationEnd)
  	.filter((evento:ActivationEnd) => evento.snapshot.firstChild==null)
  	.map((evento:ActivationEnd)=>evento.snapshot.data)
  }

}
