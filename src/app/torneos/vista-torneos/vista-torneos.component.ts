import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-vista-torneos',
  templateUrl: './vista-torneos.component.html',
  styleUrls: ['./vista-torneos.component.scss']
})
export class VistaTorneosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $("#detalleTorneoJuegos").on("click", function (ev) {
    
      ev.preventDefault();

      $("#juegosActuales").append("<div id='juegosCopia'></div>");
      $("#InfoJuegos").clone().appendTo("#juegosCopia");

      $("#crearTorneo").toggle();
      $("#juegosRetro").toggle();

      return false;

    });

    $("#detalleTorneoRetro").on("click", function (ev) {
    
      ev.preventDefault();

      $("#juegosRetro").append("<div id='juegosCopia'></div>");
      $("#InfoRetro").clone().appendTo("#juegosCopia");

      $("#crearTorneo").toggle();
      $("#juegosActuales").toggle();

      return false;

    });

  }

}
