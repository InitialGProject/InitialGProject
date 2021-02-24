import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Modelos de Entradas y Comentarios del Foro
import { Entradas } from '../models/entradas';
import { Comentarios } from '../models/comentarios';

// Servicio de Entradas y sus Comentarios del Foro
import { ForoService } from '../services/foro.service';
import { GlobalVars } from 'src/app/globalVars';

@Component({
  selector: 'app-detalle-foro',
  templateUrl: './detalle-foro.component.html',
  styleUrls: ['./detalle-foro.component.scss']
})

export class DetalleForoComponent implements OnInit {

  entradas: Entradas;
  comentarios: Comentarios;
  ID: { id: number };

  constructor(
    private servicioForo: ForoService,
    private rutaActiva: ActivatedRoute,
    private globalVars: GlobalVars
  ) { }

  ngOnInit(): void {
    this.dameEntradas();
    this.dameComentarios();
  }

  dameEntradas(): void {

    this.servicioForo.getEntradas(this.globalVars.getGlobalToken())
      .subscribe(
        infoEntrada => {
          this.entradas = infoEntrada;
          console.log(infoEntrada);
        },
        error => {
          console.log(error);
        });
  }

  dameComentarios(): void {

    this.ID = {
      id: this.rutaActiva.snapshot.params.id
    }

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.ID.id = params.id;
      });

    this.servicioForo.getComentarios(this.globalVars.getGlobalToken())
      .subscribe(
        infoComentario => {
          this.comentarios = infoComentario;
          console.log(infoComentario);
        },
        error => {
          console.log(error);
        });
  }
}
