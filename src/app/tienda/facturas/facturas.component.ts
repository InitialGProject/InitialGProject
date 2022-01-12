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
import autoTable from 'jspdf-autotable'


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

  public downloadPDF(id:number,pp:string): void {
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
      doc.text(["INITIAL G","NIF:123456789ASDF","C/Falsa de prueba 666", "VALENCIA", "FACTURA Nº"+id+" // "+pp], 10, 15);
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
    
      docResult.save(`factura`+id+`.pdf`);
    });

    //doc.save("factura.pdf");
  }

  public downloadPDF2(id:number,pp:string, Fac, Lin:object, Art:object): void {
    //testeo
    console.log(
      "Nos llega "+id,
      "ARRAY 1->",
      Fac,
      "ARRAY 2->",
      Lin,
      "ARRAY 3->",
      Art
    )

    let simple=[];
    let body_factura = [];
    let contar_total = 0;
    let articulos = 0;

    Object.values(Lin).forEach(it => {
      
       if(it.id_facturacion==id){
         simple.push ({
           name: it.id_producto, 
           quantity: it.cantidad, 
           value: it.conIVA/it.cantidad, 
           total: it.conIVA
         });

         contar_total+=it.conIVA;
         articulos++;
       }
    });

    console.log(
      "simple->",
      simple
    );
    
    window.scrollTo(0,0);
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
      fontSize : 8
    };

    let varY=20;
    doc.setFontSize(8);
    doc.text([
      "INITIAL G",
      "NIF:123456789ASDF",
      "C/Falsa de prueba 666", 
      "VALENCIA", 
      "FACTURA Nº"+id+"//"+pp], 10, varY).setFontSize(8);
      doc.line(0, 80, 600, 80) // horizontal line

    //Sumamos 20 por linea
    varY+=70;

    //Logo IG
    var img = new Image()
    img.src = 'http://alum3.iesfsl.org/assets/img/logo.png';
    doc.addImage(img, 'png', 450, 5, 140, 55);

    doc.text([
      "DATOS DEL COMPRADOR",
      "",
      "FECHA: "+Fac.fecha_compra, 
      //"NOMBRE: "+okPaypal.payer.name.given_name+" "+okPaypal.payer.name.surname, 
      "DIRECCION "+Fac.direccion,
      "CP: "+Fac.cp,
      "PROVINCIA: "+Fac.provincia,
      "PAIS "+Fac.pais,
      //"EMAIL: "+okPaypal.payer.email_address,
      //"TLF: "+okPaypal.payer.phone.phone_number.national_number,
      ], 10, varY).setFontSize(8);

    //Sumamos 20 por linea
    varY+=100;

    simple.forEach(se => {
      Object.values(Art).forEach(it => {
        
        console.log(
          it
        )

        if(it.id==se.name) body_factura.push ([it.nombre, se.quantity, se.value, se.total]);

      })
    })
    body_factura.push ([""]);    
    body_factura.push(["Total " + articulos + " articulos", "IVA 12%", " ", "Precio Total " + contar_total.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    })]);

    autoTable(doc, {
      startY: varY,
      head: [['Nombre', 'Cantidad', 'Precio Unitario', 'Precio Total']],
      body: body_factura,
    })

    doc.save(`factura_`+id+`.pdf`);
  }

  ////////////////////////////////////////////
  
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
