import { Component, OnInit } from '@angular/core';

// Modelo de Comentarios
import { Comentarios } from '../models/comentarios';

// Servicio de Entradas y sus Comentarios
import { ForoService } from '../services/foro.service';

@Component({
  selector: 'app-detalle-foro',
  templateUrl: './detalle-foro.component.html',
  styleUrls: ['./detalle-foro.component.scss']
})

export class DetalleForoComponent implements OnInit {

  comentarios: Comentarios;

  constructor(private servicioForo: ForoService) { }

  ngOnInit(): void {
    this.dameComentarios();
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
