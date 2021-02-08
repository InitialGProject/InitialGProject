import { Component, OnInit } from '@angular/core';
import { Juegos } from '../models/juegos';
import { JuegosService } from '../services/juegos.service';

@Component({
  selector: 'app-juegos-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.scss']
})
export class VistaJuegosComponent implements OnInit {

  juego: Juegos;

  constructor(private servicioJuegos: JuegosService) { }

  ngOnInit(): void {
    this.dameJuegos();
  }

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
