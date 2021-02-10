import { Component, OnInit } from '@angular/core';
import { Comentarios } from '../models/comentarios';

// Modelo de Entradas
import { Entradas } from '../models/entradas';

// Servicio de Entradas y sus Comentarios
import { ForoService } from '../services/foro.service';

@Component({
  selector: 'app-vista-foro',
  templateUrl: './vista-foro.component.html',
  styleUrls: ['./vista-foro.component.scss']
})

export class VistaForoComponent implements OnInit {

  entradas: Entradas;
  comentarios: Comentarios;

  constructor(private servicioForo: ForoService) { }

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
