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

//generar pdf
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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

    //this.downloadPDF();
  }

  public downloadPDF(id:number): void {
    console.log("Nos llega "+id)
    window.scrollTo(0,0);
    const DATA = document.getElementById('factura'+id);
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 95;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.text(["INITIAL G","NIF:123456789ASDF","C/Falsa de prueba 666", "VALENCIA", "FACTURA Nº"+id], 10, 15);
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
    
      docResult.save(`factura`+id+`.pdf`);
    });

    //doc.save("factura.pdf");
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
