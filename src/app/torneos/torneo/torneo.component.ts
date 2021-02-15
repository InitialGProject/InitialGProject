import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Modelo de Torneos
import { Torneos } from '../models/torneos';

// Servicio de Torneos y sus Participantes
import { TorneosService } from '../services/torneos.service';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.scss']
})

export class TorneoComponent implements OnInit {

  torneos: Torneos;
  Categorias: { categoria: string };

  constructor(
    private servicioTorneos: TorneosService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dameTorneos();
  }

  dameTorneos(): void {
    this.Categorias = {
      categoria: this.rutaActiva.snapshot.params.CategoriaDesc
    }

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.Categorias.categoria = params.CategoriaDesc;
      });

    this.servicioTorneos.getTorneos()
      .subscribe(
        infoTorneo => {
          this.torneos = infoTorneo;
          console.log(infoTorneo);
        },
        error => {
          console.log(error);
        });
  }
}
