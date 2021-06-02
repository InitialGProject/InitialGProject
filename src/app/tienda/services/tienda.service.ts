import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';
import { Facturas } from '../models/facturas';
import { Linfac } from '../models/lineafactura';

//BS
import { DataSharingService } from '../../data-sharing.service';

//variable
import {GlobalVars} from '../../globalVars';

//Login
import { LoginComponent } from 'src/app/account/login/login.component';
import { Usuarios } from '../models/usuarios';

//Ruta de la api
const productos = GlobalVars.ruta+'productos?per-page=99999';
const categorias = GlobalVars.ruta+'productoscategoria?per-page=99999';
const facturas = GlobalVars.ruta+'productosfacturacion?per-page=99999';
const lineafactura = GlobalVars.ruta+'productosfactura?per-page=99999';
const facturaUrl = GlobalVars.ruta;


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //Cargar ddbb del usuario conectado
  sacardatosLog(id): Observable<Usuarios> {
    return this.http.get<Usuarios>(GlobalVars.ruta+"usuarios/"+id);
  }
  
  /**Servicios para el carrito*/
  items = [
    //Declaramos los articulos del carrito para testeo
    // {it:{
    //   "id": 1,
    //   "cat_id": 1,
    //   "nombre": "Licencia LME",
    //   "precio": "20.00",
    //   "IVA": 12,
    //   "imagen": "LME.jpg",
    //   "descripcion": "Apoya a tu creador de videojuegos comprando una licencia para tu uso en local y fomentar la continuación del trabajo del autor.",
    //   "stock": 99,
    //   "disponible": 1,
    //   "estado": 0
    // }, can:2, total:44.8},
    // {it:{
    //   "id": 9,
    //   "cat_id": 2,
    //   "nombre": "Eres dios terrenal",
    //   "precio": "20000.00",
    //   "IVA": 12,
    //   "imagen": "diosterrenal.jpg",
    //   "descripcion": "Eres dios, la página es tuya, di que quieres y se tratará de hacer, haz lo que quieras con todo nuestro contenido. Solo 1 unidad disponible para nuestro dios.",
    //   "stock": 1,
    //   "disponible": 1,
    //   "estado": 1
    // }, can:1, total:22400},
  ];

  precio_total: number;
  idus:number;
  isUserLoggedIn:boolean;

  constructor(
    private http: HttpClient,
    private dataSharingService: DataSharingService,
    private CargaLogin:LoginComponent,
  ) { 
    //Precio total para el DS
    this.dataSharingService.precio_total.subscribe( value => {
      this.precio_total = value;
    }); 
    
    //id usuariologged
    this.dataSharingService.iduseract.subscribe( value => {
      this.idus = value;
    });
    
    //id usuariologged
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    }); 

  }

  //Cargar el carro local
  getCarroLoc() {
    let test=JSON.parse(localStorage.getItem('carrito'));
    if(test!=null)
      this.items = test; 
  }

  //Añadir al carrito el producto {it:objetos, can:valor}
  addToCart(it:any, can:number){
    //Si no está se añadirá, si está se modificará el producto
    if(!this.items.find(item=>item.it.id==it.id)){
      console.log("Añadiendo al carrito");
      this.items.push({it, can, total:can*(it.precio- -(it.precio*it.IVA)/100)});
    }else{
      console.log("Modificando el carrito");
      this.items.find(item=>item.it.id==it.id).can=can;
      this.items.find(item=>item.it.id==it.id).total=can*(it.precio- -(it.precio*it.IVA)/100);
    }
      //Guardamos el carro en BS
      this.dataSharingService.carro.next(this.items);
      
      //Almacenamos el carro en local
      localStorage.setItem('carrito', JSON.stringify(this.items));

      //Testeo
      console.log("Carro actualizado:");
      console.log(localStorage.getItem('carrito'));
  }

  //Recibir datos del carrito
  getItems(){
    this.getCarroLoc();
    return this.items;
  }

  //Asignar items al carro
  setItems(val){
    this.items=val;
  }

  //Vaciar carrito
  clearCart(){
    this.items=[];
    localStorage.setItem('carrito', JSON.stringify(this.items));
    window.location.reload()
    //return this.items;
  }

  //Vaciar contador
  setTo0(){
    this.precio_total=0;
  }

  //Sumar total del carro
  getPrecioTot(){
    this.setTo0();
    this.items.forEach(element => {
      this.precio_total+=element.total;
    });
    return this.precio_total;
  }

  /**Servicios para cargar datos*/
  //Cargar ddbb de productos
  getProd(): Observable<Catalogo> {
     return this.http.get<Catalogo>(productos);
  }

  //Cargar ddbb de categorias
  getCategorias(): Observable<Categorias> {
    return this.http.get<Categorias>(categorias);
  }

  //Cargar ddbb de facturas
  getFacturas(): Observable<Facturas> {
    return this.http.get<Facturas>(facturas);
  }

  //Cargar ddbb de linea_Factura
  getLinFacturas(): Observable<Linfac> {
    return this.http.get<Linfac>(lineafactura);
  }


  /**!Servicios para cargar datos*/

  //Sacar el usuario logueado
  getUserLog(){
    if(!this.isUserLoggedIn)
      this.CargaLogin.userLocal();
  }

  //Sacar el id del usuario logueado
  getIdUsu(){
    return this.idus;
  }

  //Enviar datos para facturar a la api
  facturar(factura: Facturas) {
    return this.http.post(`${facturaUrl}`+ `productosfacturacion?per-page=999`, factura);
  }

  //Enviar datos para facturar a la api
  updateUser(user, datos) {
    console.log(datos);
    return this.http.put(`${facturaUrl}`+ `usuarios/`+user, datos);
  }

  //Enviar datos para facturar a la api
  facturarLinea(linea: Linfac) {
    return this.http.post(`${facturaUrl}`+ `productosfactura`, linea)
    .subscribe(
      data => {
        this.restarStock(data);
      }
    );
  }

  //Cambiar stock de los productos comprados
  restarStock(objeto:any){
    this.http.get(`${facturaUrl}`+ `productos/`+objeto["id_producto"])
    .subscribe(
      async data=>{
        this.http.put(`${facturaUrl}`+ `productos/`+objeto["id_producto"], {stock: data['stock']-objeto['cantidad']})
        .subscribe(
          data=>{
            //Testeo
            console.log("DDBB Actualizada");
            console.log(data);
          }
        )
      }
    );
  }
}