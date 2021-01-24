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

    $("#detalleTorneoJuegos").one("click", function (ev) {

      ev.preventDefault();

      $("#juegosActuales").append("<div id='juegosCopia'></div>");
      $("<section id='copiaJuegos'>Texto de Ejemplo</section>").appendTo("#juegosCopia");

      $("#crearTorneo").hide();
      $("#juegosRetro").hide();

      $("#copiaJuegos").css({
        "position": 'absolute', "width": '100%', "margin-top": '-150%', "margin-left": '72%', "height": '100%',
        "padding": '5%', "background-color": '#818181', "border": '5px solid white', "border-left": 'none',
        "border-radius": '0.25rem',
      });

      $(this).on("click", function (ev) {

        ev.preventDefault();

        $("#juegosCopia").toggle();
        $("#crearTorneo").toggle();
        $("#juegosRetro").toggle();

      });

      return false;

    });

    $("#detalleTorneoRetro").one("click", function (ev) {

      ev.preventDefault();

      $("#juegosRetro").append("<div id='juegosCopiaRetro'></div>");
      $("<section id='copiaRetro'>Texto de Ejemplo</section>").appendTo("#juegosCopiaRetro");

      $("#crearTorneo").hide();
      $("#juegosActuales").hide();

      $("#copiaRetro").css({
        "position": 'absolute', "width": '100%', "margin-top": '-175%', "margin-left": '72%', "height": '100%',
        "padding": '5%', "background-color": '#818181', "border": '5px solid white', "border-left": 'none',
        "border-radius": '0.25rem'
      });

      $(this).on("click", function (ev) {

        ev.preventDefault();

        $("#juegosCopiaRetro").toggle();
        $("#crearTorneo").toggle();
        $("#juegosActuales").toggle();

      });

      return false;

    });

  }

}
