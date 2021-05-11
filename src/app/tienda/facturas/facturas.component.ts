import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//BS
import { DataSharingService } from '../../data-sharing.service';

//Catalogos
import { TiendaService } from '../services/tienda.service';
import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';
import { Facturas } from '../models/facturas';
import { Linfac } from '../models/lineafactura';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {
  isUserLoggedIn: boolean;
  token: any;

  catalogo: Catalogo;
  categoria: Categorias;
  factura: Facturas;
  lineafactura: Linfac;

  constructor(
    private dataSharingService: DataSharingService,
    private servicioTienda: TiendaService, 
  ){
    //Saber si estas logueado
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
    //Datos del token sobrecargado
    this.dataSharingService.token.subscribe( value => {
      this.token = value;
      console.log("test"+this.token);
    });
  }

  ngOnInit(): void {
    this.cargarTodo(); 
    this.servicioTienda.getUserLog(); 
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

    //Recibir Categorias
    this.servicioTienda.getCategorias()
      .subscribe(
        data => {
          this.categoria = data;
          console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Facturas
    this.servicioTienda. getFacturas()
      .subscribe(
        data => {
          this.factura = data;
          console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Linea de factura
    this.servicioTienda.getLinFacturas()
      .subscribe(
      data => {
        this.lineafactura = data;
        console.log(data);
      },
      error => {
        console.log(error);
    });
  }

}
