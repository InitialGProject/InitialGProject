import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';

//BS
import { DataSharingService } from '../../data-sharing.service';

//variable
import {GlobalVars} from '../../globalVars';

//Ruta de la api
const productos = GlobalVars.ruta+'productos';
const categorias = GlobalVars.ruta+'productoscategoria';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  /**Servicios para el carrito*/
  //Declaramos los articulos del carrito
  items = [
    {it:{
      "id": 1,
      "cat_id": 1,
      "nombre": "Licencia LME",
      "precio": "20.00",
      "IVA": 12,
      "imagen": "LME.jpg",
      "descripcion": "Apoya a tu creador de videojuegos comprando una licencia para tu uso en local y fomentar la continuación del trabajo del autor.",
      "stock": 99,
      "disponible": 1,
      "estado": 0
    }, can:2, total:44.8},
    {it:{
      "id": 9,
      "cat_id": 2,
      "nombre": "Eres dios terrenal",
      "precio": "20000.00",
      "IVA": 12,
      "imagen": "diosterrenal.jpg",
      "descripcion": "Eres dios, la página es tuya, di que quieres y se tratará de hacer, haz lo que quieras con todo nuestro contenido. Solo 1 unidad disponible para nuestro dios.",
      "stock": 1,
      "disponible": 1,
      "estado": 1
    }, can:1, total:22400},
  ];

  precio_total: number;

  constructor(
    private http: HttpClient,
    private dataSharingService: DataSharingService,
  ) { 
    //Para probetear cosas
    this.dataSharingService.precio_total.subscribe( value => {
      this.precio_total = value;
      }); 
  }

  //Añadir al carrito el producto {it:objetos, can:valor}
  addToCart(it, can){
    this.items.push({it, can, total:can*(it.precio- -(it.precio*it.IVA)/100)});
    console.log(this.items);
  }

  //Recibir datos del carrito
  getItems(){
    return this.items;
  }

  //Vaciara carrito
  clearCart(){
    this.items=[];
    return this.items;
  }

  //Vaciar contador
  setTo0(){
    this.precio_total=0;
  }

  //Sumar total del carro
  getPrecioTot(){
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
}