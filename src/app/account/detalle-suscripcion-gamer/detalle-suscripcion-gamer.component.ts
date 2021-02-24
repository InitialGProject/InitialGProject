import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-suscripcion',
  templateUrl: './detalle-suscripcion-gamer.component.html',
  styleUrls: ['./detalle-suscripcion-gamer.component.scss']
})

export class DetalleSuscripcionGamerComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}