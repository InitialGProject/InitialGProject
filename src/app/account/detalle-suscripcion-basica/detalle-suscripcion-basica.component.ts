import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-suscripcion',
  templateUrl: './detalle-suscripcion-basica.component.html',
  styleUrls: ['./detalle-suscripcion-basica.component.scss']
})

export class DetalleSuscripcionBasicaComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}