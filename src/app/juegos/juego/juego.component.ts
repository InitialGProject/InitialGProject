import { Component, OnInit } from '@angular/core';
import { Juegos } from '../models/juegos';
import { JuegosService } from '../services/juegos.service';

//recibir parametros
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})

export class JuegoComponent implements OnInit {
  ID: { id: number };
  juego: Juegos;

  constructor(
    private servicioJuegos: JuegosService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dameJuegos();
    this.dameID();
  }

  dameID() {
    this.ID = {
      id: this.rutaActiva.snapshot.params.id
    };

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.ID.id = params.id;
      });  }

  dameJuegos(): void {
    this.servicioJuegos.getAll()
      .subscribe(
        data => {
          this.juego = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
