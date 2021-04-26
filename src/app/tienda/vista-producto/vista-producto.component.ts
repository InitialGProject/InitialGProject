import { Component, OnInit } from '@angular/core';

//Importar de API
import { Catalogo } from '../models/catalogo';

//Importar datos
import { TiendaService } from '../services/tienda.service';

//recibir parametros ruta
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.scss']
})
export class VistaProductoComponent implements OnInit {
  
  catalogo: Catalogo;
  articulo: {id: string};

  constructor(private servicioTienda: TiendaService, private rutaActiva: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.cargarTodo(); 
  }

  cargarTodo(): void {
    //Recibir productos
    this.servicioTienda.getProd()
      .subscribe(
        data => {
          this.catalogo = data;
          console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir parametro id articulo
    this.articulo = {
      id: this.rutaActiva.snapshot.params.id
    };
  }

}
