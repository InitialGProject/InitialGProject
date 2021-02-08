import { Component, OnInit } from '@angular/core';

// Modelo de Torneos
import { Torneos } from '../models/torneos';

// Servicio de Torneos y sus Participantes
import { TorneosService } from '../services/torneos.service';

@Component({
  selector: 'app-torneo-actual',
  templateUrl: './torneo-actual.component.html',
  styleUrls: ['./torneo-actual.component.scss']
})

export class TorneoActualComponent implements OnInit {

  torneos: Torneos;

  constructor(private servicioTorneos: TorneosService) { }

  ngOnInit(): void {
    this.dameTorneos();
  }

  dameTorneos(): void {
    this.servicioTorneos.filtroCategorias('Actual')
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
