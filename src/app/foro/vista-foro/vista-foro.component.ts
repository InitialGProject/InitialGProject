import { Component, OnInit } from '@angular/core';

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

  constructor(private servicioForo: ForoService) { }

  ngOnInit(): void {
    this.dameEntradas();
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
}
