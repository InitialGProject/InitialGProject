import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Modelo de Comentarios
import { Comentarios } from '../models/comentarios';

// Servicio de Entradas y sus Comentarios
import { ForoService } from '../services/foro.service';
import { Entradas } from '../models/entradas';

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
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dameEntradas();
    this.dameComentarios();
  }

  dameEntradas(): void {
    this.servicioForo.getEntradas()
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
    this.servicioForo.getComentarios()
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
