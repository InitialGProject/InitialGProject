import { Component, OnInit } from '@angular/core';
//Importar datos
import { TiendaService } from '../services/tienda.service';
//Importar de API
import { Catalogo } from '../models/catalogo';
//BS
import { DataSharingService } from '../../data-sharing.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  items = this.carritoService.getItems();
  precio_total: number;
  catalogo: Catalogo;
  form: FormGroup;
  isUserLoggedIn: boolean;
  iduseract:number;

  constructor(
    private carritoService: TiendaService,
    private dataSharingService: DataSharingService,
    private formBuilder: FormBuilder,

  ) {
    //Cargar valor del PT en su BS
    this.dataSharingService.precio_total.subscribe( value => {
      this.precio_total = value;
    }); 
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
    //id usuariologged
    this.dataSharingService.iduseract.subscribe( value => {
      this.iduseract = value;
    });
    // //Cargar valor del Carro en su BS
    // this.dataSharingService.carro.subscribe( value => {
    //   this.items = value;
    // });  
   }
   

  ngOnInit(): void {
    
    //Cargar componentes
    this.cargarTodo(); 
    
    //Cargamos el usuario local
    this.carritoService.getUserLog();
    
    //Cargar precio carrito
    this.carritoService.setTo0();
    this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
    
    //Cargamos el carro local
    if(localStorage.getItem('carrito')!=null){
      this.carritoService.getCarroLoc();
    }
    
    //Cargar precio carrito
    this.carritoService.setTo0();
    this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
    
    //Creamos el form para pasarlo a la api
    this.form = this.formBuilder.group({
      id_usuario: [this.iduseract],
      total: [''],
    });
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

      //Reiniciar el precio total
      this.carritoService.setTo0();
      let total=this.carritoService.getPrecioTot();
      this.dataSharingService.precio_total.next(total);
      console.log("Precio total en carro:"+total);

    }
  }
  
  //Mandar a la api
  async onSubmit(){
    this.form.setValue=this.datosFactura();
    
    //Testeo   
    // console.log("Objeto:");
    // console.log(this.form.value)

    // Pasamos a la api
    this.carritoService.facturar(await this.datosFactura())
    .subscribe(
      data => {
        //por cada contenido de la factura se creará su relación
        this.items.forEach(async linea => {          
          //Mandamos cada linea a la api
          this.carritoService.facturarLinea(await this.lineaFactura(data['id'], linea.it.id, linea.can))
        });
      });
      
      
      // Vaciamos el carro al acabar
      setTimeout(() => {
       this.carritoService.clearCart();
      }, 2000);
      
  }

  //Funcion para cargar los datos del form y el user para mandar a la api
  private datosFactura():any{
    return {
      id_usuario: this.iduseract,
      total: this.form.get(["total"]).value,
    };
  }

  //Funcion para generar cuerpo de las facturas
  private lineaFactura(idf:number,idp:number,can:number):any{
    return {
      id_facturacion: idf,
      id_producto: idp,
      cantidad: can,
    };
  }

  //Vaciamos el carro
  clearCart(){
    this.items=[];
    this.dataSharingService.carro.next(this.items);
    this.carritoService.setItems(this.items);
    localStorage.setItem('carrito', JSON.stringify(this.items));
    this.carritoService.setTo0();
    let total=this.carritoService.getPrecioTot();
    this.dataSharingService.precio_total.next(total);
  }
}
