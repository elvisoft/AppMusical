import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  instrumentos = [
    {
      nombre: 'flauta',
      imagen: 'assets/imagenes/flauta.png',
      audio: 'assets/sonidos/flauta.mp3'
    },
    {
      nombre: 'bombo1',
      imagen: 'assets/imagenes/bombo1.png',
      audio: 'assets/sonidos/bombo1.mp3'
    },
    {
      nombre: 'bombo2',
      imagen: 'assets/imagenes/bombo2.png',
      audio: 'assets/sonidos/bombo2.mp3'
    },
    {
      nombre: 'Platillos',
      imagen: 'assets/imagenes/platillos.png',
      audio: 'assets/sonidos/platillos.mp3'
    }
  ]

  reproducirSonido(instrumento){
    let sonido = new Audio();
    sonido.src=instrumento.audio;
    sonido.load();
    sonido.play();
  }

  

}
