import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-vista-torneos',
  templateUrl: './vista-torneos.component.html',
  styleUrls: ['./vista-torneos.component.scss']
})

export class VistaTorneosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copiaJuegos() {
    var copiaJuegos = document.getElementById("juegosCopia");
    copiaJuegos.classList.add("mostrar, juegosCopia");
  }

}

/* Información Juegos Actuales

    $("#detalleTorneoJuegos").one("click", function (ev) {

      ev.preventDefault();

      $("#juegosActuales").append("<div id='juegosCopia' style='margin: 7%;margin-top: -16%;'></div>");
      $("<mat-card id='copiaJuegos'>" +
        "<mat-card-content>Texto de Ejemplo</mat-card-content>" +
        "</mat-card>").appendTo("#juegosCopia");

      $("#crearTorneo").hide();
      $("#juegosRetro").hide();

      $("#copiaJuegos").css({
        "position": 'absolute', "width": '100%', "margin-left": '43.5%', "height": '99.65%', "padding": '5%',
        "background-color": '#818181', "border": '5px solid', "border-left": 'none', "border-radius": '0.25rem',
        "top": '3.5%'
      });

      $(this).on("click", function (ev) {

        ev.preventDefault();

        $("#juegosCopia").toggle();
        $("#crearTorneo").toggle();
        $("#juegosRetro").toggle();

      });

      return false;

    });

    // Información Juegos Retro

    $("#detalleTorneoRetro").one("click", function (ev) {

      ev.preventDefault();

      $("#juegosRetro").append("<div id='juegosCopiaRetro'></div>");
      $("<mat-card id='copiaRetro'>" +
        "<mat-card-content>Texto de Ejemplo</mat-card-content>" +
        "</mat-card>").appendTo("#juegosCopiaRetro");

      $("#crearTorneo").hide();
      $("#juegosActuales").hide();

      $("#copiaRetro").css({
        "position": 'absolute', "width": '100%', "margin-left": '43.5%', "height": '92.65%', "padding": '5%',
        "background-color": '#818181', "border": '5px solid', "border-left": 'none', "border-radius": '0.25rem',
        "top": '3.5%'
      });

      $(this).on("click", function (ev) {

        ev.preventDefault();

        $("#juegosCopiaRetro").toggle();
        $("#crearTorneo").toggle();
        $("#juegosActuales").toggle();

      });

      return false;

    });
*/