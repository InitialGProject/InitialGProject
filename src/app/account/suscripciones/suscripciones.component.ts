import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})

export class SuscripcionesComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}