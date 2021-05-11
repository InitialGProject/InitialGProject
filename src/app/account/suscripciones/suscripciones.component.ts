import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})

export class SuscripcionesComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private loginComponent:LoginComponent,

  ) { }

  ngOnInit() {
    this.loginComponent.userLocal();
  }

}