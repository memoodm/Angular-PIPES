import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Guillermo De Mendoza"; 
  arregloNumeros:number[] = [0,1,2,3,4,5,6,7,8,9];
  PI:number = 3.14159265359;
  myNumber:number = 0.234;
  myMoneda:number = 1234.5;
  heroe = {
    nombre: "logan",
    clave: "wolverine",
    edad: 500,
    direccion: {
      calle: "av calle 127",
      carrera: "18b-44",
      casa: 2
    }

  }
  valorPromesa = new Promise( (resolve,reject)=>{
    setTimeout( ()=>resolve('LLego la data!'),3500 );
  })

  myDate = new Date();

  myName = "guillermo anDREs de menDOZa corrales";

  linkYoutubeVideo = "https://www.youtube.com/embed/gNhN6lT-y5U";

  activarContrasena:boolean = true;
  public accionContrasena(){
    this.activarContrasena = !this.activarContrasena;
  }
}
