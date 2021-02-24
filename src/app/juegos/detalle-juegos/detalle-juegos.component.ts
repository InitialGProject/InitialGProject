import { Component, OnInit } from '@angular/core';
//Datos
import { Juegos } from '../models/juegos';
import { JuegosService } from '../services/juegos.service';
import { Categorias } from '../models/categorias';

//recibir parametros
import { ActivatedRoute, Params } from '@angular/router'

//Filtro usuarios
import { GlobalVars } from '../../globalVars';

@Component({
  selector: 'app-detalle-juegos',
  templateUrl: './detalle-juegos.component.html',
  styleUrls: ['./detalle-juegos.component.scss']
})

export class DetalleJuegosComponent implements OnInit {
  ID: { id: number };
  juego: Juegos;
  categorias: Categorias;

  constructor(
    private servicioJuegos: JuegosService,
    private rutaActiva: ActivatedRoute,
    private globalVars: GlobalVars

  ) { }
  public TUser: any;


  ngOnInit(): void {
    this.dameJuegos();    
    this.dameCategorias();
    this.TUser=this.globalVars.getglobalUserToken();
    console.log(this.TUser)


  }

  dameJuegos(): void {

    this.ID = {
      id: this.rutaActiva.snapshot.params.id
    };

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.ID.id = params.id;
      });

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

  dameCategorias(): void {
    this.servicioJuegos.getCategorias()
      .subscribe(
        data => {
          this.categorias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
