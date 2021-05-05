import { Component, OnInit } from '@angular/core';
//Importar datos
import { TiendaService } from '../services/tienda.service';
//Importar de API
import { Catalogo } from '../models/catalogo';
//BS
import { DataSharingService } from '../../data-sharing.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  items = this.carritoService.getItems();
  precio_total: number;
  // precio_total = this.carritoService.getPrecioTot();
  catalogo: Catalogo;


  constructor(
    private carritoService: TiendaService,
    private dataSharingService: DataSharingService,
  
  ) {
    //Para probetear cosas
    this.dataSharingService.precio_total.subscribe( value => {
      this.precio_total = value;
      });  
   }

  ngOnInit(): void {
    this.cargarTodo(); 
  }

  cargarTodo(): void {
    //Recibir productos
    this.carritoService.getProd()
      .subscribe(
        data => {
          this.catalogo = data;
        },
        error => {
          console.log(error);
    });
  }

  removeUpload(uploadItem) {
    // Sacar la posicion que vamos a borrar
    const index: number = this.items.indexOf(uploadItem);

    // Si negativo no está, sino borra
    if (index !== -1) {
      this.items.splice( index, 1 );
      console.log("Borrado"+console.log(uploadItem));
      //Reiniciar el precio total
      
      this.carritoService.setTo0();
      this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());

    }
}
}
