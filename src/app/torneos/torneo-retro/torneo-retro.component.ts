import { Component, OnInit } from '@angular/core';

// Modelo de Torneos
import { Torneos } from '../models/torneos';

// Servicio de Torneos y sus Participantes
import { TorneosService } from '../services/torneos.service';

@Component({
  selector: 'app-torneo-retro',
  templateUrl: './torneo-retro.component.html',
  styleUrls: ['./torneo-retro.component.scss']
})

export class TorneoRetroComponent implements OnInit {
  
  torneos: Torneos;

  constructor(private servicioTorneos: TorneosService) { }

  ngOnInit(): void {
    this.dameTorneos();
  }

  dameTorneos(): void {
    this.servicioTorneos.filtroCategorias('Retro')
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
