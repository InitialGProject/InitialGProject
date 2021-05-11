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
  catalogo: Catalogo;


  constructor(
    private carritoService: TiendaService,
    private dataSharingService: DataSharingService,
  ) {
    //Cargar valor del PT en su BS
    this.dataSharingService.precio_total.subscribe( value => {
      this.precio_total = value;
      }); 

    // //Cargar valor del Carro en su BS
    // this.dataSharingService.carro.subscribe( value => {
    //   this.items = value;
    // });  
   }
   

  ngOnInit(): void {
    //Cargar componentes
    this.cargarTodo(); 
    
    //Cargar precio carrito
    this.carritoService.setTo0();
    this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
    
    //Cargamos el usuario local
    this.carritoService.getUserLog();

    //Cargamos el carro local
    if(localStorage.getItem('carrito')){
      this.carritoService.getCarroLoc();
    }

    //Cargar precio carrito
    this.carritoService.setTo0();
    this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
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

  //Eliminar articulos del carrito
  removeUpload(uploadItem:any) {
    // Sacar la posicion que vamos a borrar
    const index: number = this.items.indexOf(uploadItem);

    // Si negativo no está, sino borra
    if (index !== -1) {
      this.items.splice( index, 1 );
      console.log("Borrado "+index+" "+console.log(uploadItem));
      
      this.dataSharingService.carro.next(this.items);
      this.carritoService.setItems(this.items);
      localStorage.setItem('carrito', JSON.stringify(this.items));
      console.log("Se queda");
      console.log(this.items);


      //Reiniciar el precio total
      this.carritoService.setTo0();
      let total=this.carritoService.getPrecioTot();
      this.dataSharingService.precio_total.next(total);
      console.log(total);

    }
  }
  
}
