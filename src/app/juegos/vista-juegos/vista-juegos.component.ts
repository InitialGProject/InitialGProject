import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-juegos-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.scss']
})
export class VistaJuegosComponent implements OnInit {

  constructor() { }

  idj:number;
  
  ngOnInit() {
    let iddeljuego;

    $('<a routerLink="juego" >').click(function () {    
      iddeljuego=$(this).child().id();
      console.log(iddeljuego);
    });
      
    this.idj=iddeljuego;
    /**
    $('a').each(function () {
      if ($(this).attr('href') == "") {
        $(this).hide();
      }
    });
  **/
  }


}
