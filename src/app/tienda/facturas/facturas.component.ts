import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//Bootstrap modal
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

//BS
import { DataSharingService } from '../../data-sharing.service';

//Catalogos
import { TiendaService } from '../services/tienda.service';
import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';
import { Facturas } from '../models/facturas';
import { Linfac } from '../models/lineafactura';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})

export class FacturasComponent implements OnInit {

  //Valores BS
  isUserLoggedIn: boolean;
  token: any;
  iduseract:number;

  //Valores Pagina
  catalogo: Catalogo;
  categoria: Categorias;
  factura: Facturas;
  lineafactura: Linfac;
  
  //Test si no hay compras
  hayRegistros:boolean =true;

  //Valores Modal
  closeModal: string;
  tolosdatos:Usuarios;


  constructor(
    private dataSharingService: DataSharingService,
    private servicioTienda: TiendaService,
    private modalService: NgbModal, 
  ){
    //Saber si estas logueado
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
    //Datos del token sobrecargado
    this.dataSharingService.token.subscribe( value => {
      this.token = value;
    });
    //Datos del usuario
    this.dataSharingService.iduseract.subscribe( value => {
      this.iduseract = value;
    });
  }

  ngOnInit(): void {
    this.cargarTodo(); 
    this.servicioTienda.getUserLog();
    this.servicioTienda.sacardatosLog(this.iduseract).subscribe(
      data=>{
        this.tolosdatos=data;
      }
    );
  }

  cargarTodo(): void {
    //Recibir productos
    this.servicioTienda.getProd()
      .subscribe(
        data => {
          this.catalogo = data;
          //console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Categorias
    this.servicioTienda.getCategorias()
      .subscribe(
        data => {
          this.categoria = data;
          //console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Facturas
    this.servicioTienda.getFacturas()
      .subscribe(
        data => {
          this.factura = data;
          //console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Linea de factura
    this.servicioTienda.getLinFacturas()
      .subscribe(
      data => {
        this.lineafactura = data;
        //console.log(data);
      },
      error => {
        console.log(error);
    });
    
  }

  /**
   * MODAL activarlo
   */
   triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'facturaDetalle'});
  }

}
