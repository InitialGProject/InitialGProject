import { Component, OnInit } from '@angular/core';

//Importar de API
import { Catalogo } from '../models/catalogo';

//Importar datos
import { TiendaService } from '../services/tienda.service';

//recibir parametros ruta
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.scss']
})
export class VistaProductoComponent implements OnInit {
  
  catalogo: Catalogo;
  articulo: {id: string};
  cantidad_articulos:number;

  constructor(
    private servicioTienda: TiendaService, 
    private rutaActiva: ActivatedRoute, 
    private router: Router,
    private dataSharingService: DataSharingService,
  ) { }

  ngOnInit(): void {
    this.cargarTodo(); 
    this.cantidad_articulos=1;
    this.servicioTienda.getUserLog();
  }

  cargarTodo(): void {
    //Recibir productos
    this.servicioTienda.getProd()
      .subscribe(
        data => {
          this.catalogo = data;
        },
        error => {
          console.log(error);
    });

    //Recibir parametro id articulo
    this.articulo = {
      id: this.rutaActiva.snapshot.params.id
    };
  }

  addToCart(producto){
    this.servicioTienda.addToCart(producto,this.cantidad_articulos);
    window.alert("Producto añadido al carrito");
    this.servicioTienda.setTo0();
    this.dataSharingService.precio_total.next(this.servicioTienda.getPrecioTot());
    return false;
  }

  goBack() {
    this.router.navigate(['/tienda']);
    }

}
