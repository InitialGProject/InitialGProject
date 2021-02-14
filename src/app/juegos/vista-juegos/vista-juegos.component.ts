import { Component, OnInit } from '@angular/core';
import { Juegos } from '../models/juegos';
import { JuegosService } from '../services/juegos.service';


//recibir parametros
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juegos-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.scss']
})
export class VistaJuegosComponent implements OnInit {
  tipo: {clase: string};
  juego: Juegos;

  constructor(private servicioJuegos: JuegosService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.dameJuegos();
  }

  dameJuegos(): void {
    this.tipo = {
      clase: this.rutaActiva.snapshot.params.clase
    };
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
