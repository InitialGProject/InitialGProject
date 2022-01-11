import { Component, OnInit } from '@angular/core';
//Importar datos
import { TiendaService } from '../services/tienda.service';
//Importar de API
import { Catalogo } from '../models/catalogo';
//BS
import { DataSharingService } from '../../data-sharing.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuarios } from '../models/usuarios';
import { Router } from '@angular/router';

//pp
import { IPayPalConfig, ICreateOrderRequest, IPurchaseUnit  } from 'ngx-paypal';// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgxSpinnerService } from 'ngx-spinner';

//factura
//generar pdf
import { jsPDF } from "jspdf";
// import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';
// declare let paypal: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // public payPalConfig: any ;
  public payPalConfig?: IPayPalConfig;
  showSuccess;

  public showPaypalButtons: boolean;
  public data: any;
  items = this.carritoService.getItems();
  precio_total: number;
  total_si: number;
  catalogo: Catalogo;
  form: FormGroup;
  isUserLoggedIn: boolean;
  iduseract:number;
  direc:any;
  tolosdatos:Usuarios;
  idFactura: any;

  constructor(
    private carritoService: TiendaService,
    private dataSharingService: DataSharingService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal, 
    private router: Router,

  ) {

    //Cargar valor del PT en su BS
    this.dataSharingService.precio_total.subscribe( value => {  //precio con iva
      this.precio_total = value;
    }); 
    this.dataSharingService.precio_si.subscribe( value => {     //precio sin iva
      this.total_si = value;
    }); 
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
    //id usuariologged
    this.dataSharingService.iduseract.subscribe( value => {
      this.iduseract = value;
    });

   }

  cargarPaypal(){
    var jsonx = [];
    
    this.items.forEach(element => {
      
      jsonx.push({
        name: ""+element.it.nombre, 
        quantity: ""+element.can, 
        category: "DIGITAL_GOODS", 
        unit_amount: { 
          currency_code: "EUR", 
          value: ""+element.total/element.can, 
        }
      })

      //testeo
      // console.log(
      //   "carro->",
      //   element
      // )
    });

    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: ''+this.precio_total+'',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: ''+this.precio_total+''
                }
              }
            },
            items: 
              jsonx
          }
        ]
      },
      advanced: {
          commit: "true"
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        //testeo
        // console.log(
        //   'onApprove - transacción aprobada, aún no autorizada', 
        //   data, 
        //   actions
        // );
        actions.order.get().then(details => {
          //testeo
          // console.log(
          //   'onApprove - detalles completos en onApprove: ', 
          //   details
          // );
        });
      },

      /**
       * Cuando PayPal nos de el OK a la transacción, procesaremos el producto aqui
       * @param data Respuesta OK de paypal
       */
      onClientAuthorization: (data) => {
        //testeo
        // console.log(
        //   "onClientAuthorization - Informando al servidor de la transacción completa", 
        //   data,
        //   "Carrito->",
        //   this.items,
        //   this.precio_total ,
        //   "comprador->",           
        //   data.payer,
       
        //   );

          this.showSuccess = true;
          //testeo
          this.onSubmit(data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions, "pulsado");
      },
    };
  }

  ngOnInit(): void {
    this.carritoService.sacardatosLog(this.iduseract).subscribe(
      data=>{
        this.tolosdatos=data;
      }
    );

    //Cargar componentes
    this.cargarTodo(); 
    
    //Cargamos el usuario local
    this.carritoService.getUserLog();
    
    //Cargar precio carrito
    this.carritoService.setTo0();
    this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
    this.dataSharingService.precio_si.next(this.carritoService.getPrecioTotSi());

    
    //Cargamos el carro local si lo hay
    if(localStorage.getItem('carrito')!=null){
      this.carritoService.getCarroLoc();
      
      //Cargar precio carrito
      this.carritoService.setTo0();
      this.dataSharingService.precio_si.next(this.carritoService.getPrecioTotSi());
      this.dataSharingService.precio_total.next(this.carritoService.getPrecioTot());
    }
    
    //Creamos el form para pasarlo a la api
    this.form = this.formBuilder.group({
      id_usuario: [this.iduseract],
      total: [''],
      total_si: [''],
      direccion:[''],
      pais:[''],
      cp:[''],
      provincia:[''],
      noretorno:false,
      
      nombre_tarjeta:[''],
      numero_tarjeta:[''],
      mes_tarjeta:[''],
      año_tarjeta:[''],
      cvv_tarjeta:[''],
    });

    this.cargarPaypal();
    //testeo
    // console.log('payPalConfig is ' ,this.payPalConfig);


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
      let siva=this.carritoService.getPrecioTotSi();
      this.dataSharingService.precio_si.next(siva);
      this.dataSharingService.precio_total.next(total);

      console.log("Precio total en carro:"+total);

    }
  }
  submit() {
    this.onSubmit();
  }

  //Mandar a la api
  async onSubmit(okPaypal=null){
    this.form.setValue=this.datosFactura(okPaypal);
    let facPP=okPaypal.id;
    let idFAC=0;
    // Pasamos a la api
    this.carritoService.facturar(await this.datosFactura(okPaypal))
    .subscribe(
      data => {
        this.idFactura=data['id'];
        if(idFAC==0) {
          idFAC=data['id'];
          this.downloadPDF(idFAC,facPP,okPaypal);
        }

        //por cada contenido de la factura se creará su relación
        this.items.forEach(async linea => {          
          //Mandamos cada linea a la api
          this.carritoService.facturarLinea(await this.lineaFactura(data['id'], linea.it.id, linea.can, linea.total, linea.totsiva, linea.facturaPP));
        })
      }, error => {
        console.log(error)
        console.log(error.error)
        // alert("Has introducido mal algun campo, revisa tus datos");
        error.error.forEach(element => {
          let datos=element[Object.keys(element)[0]];
          console.log(datos);
          alert(datos+" está mal")
          
        });
      });

      // testeo
      // console.log(this.form);

      // Vaciamos el carro al acabar
      setTimeout(() => {
        
        //testeo -> Comentar estas lineas
      //  this.carritoService.clearCart();
      //  this.router.navigate(['/compras']);
      }, 2000);
      
  }

  //Funcion para cargar los datos del form y el user para mandar a la api
  private datosFactura(okPaypal):any{
    //testeo
    // console.log("factura_>"+okPaypal.id);

    return {
      id_usuario: this.iduseract,
      total: this.form.get(["total"]).value,
      total_si: this.form.get(["total_si"]).value,
      cp: okPaypal.payer.address.postal_code,
      pais: okPaypal.payer.address.country_code,
      provincia: okPaypal.payer.address.admin_area_1,
      direccion: okPaypal.payer.address.address_line_1,
      facturaPP: okPaypal.id,
    };
  }

  //Funcion para generar cuerpo de las facturas
  private lineaFactura(idf:number,idp:number,can:number,onIVA:number,inIVA:number, facturaPP:string):any{
    return {
      id_facturacion: idf,
      id_producto: idp,
      cantidad: can,
      conIVA: onIVA,
      sinIVA: inIVA,
      facturaPP: facturaPP
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

  /**
   * MODAL activarlo
   */
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'verifica'});
    return false;
  }
 
  pay() {
    this.showPaypalButtons = true;
  }

  back(){
    this.showPaypalButtons = false;
  }

  public downloadPDF(id:number,pp:string, okPaypal): void {
    //testeo
    console.log("Nos llega "+id,
      "ARRAY ->",
      okPaypal,
      "productos ->",
      okPaypal.purchase_units[0].items
    )
    let simple=okPaypal.purchase_units[0].items;
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
    varY+=60;

    //Logo IG
    var img = new Image()
    img.src = 'http://alum3.iesfsl.org/assets/img/logo.png';
    doc.addImage(img, 'png', 450, 5, 140, 55);

    doc.text([
      "DATOS DEL COMPRADOR",
      "",
      "FECHA: "+okPaypal.create_time, 
      "NOMBRE: "+okPaypal.payer.name.given_name+" "+okPaypal.payer.name.surname, 
      "DIRECCION "+okPaypal.payer.address.address_line_1,
      "CP: "+okPaypal.payer.address.postal_code,
      "PROVINCIA: "+okPaypal.payer.address.admin_area_1,
      "PAIS "+okPaypal.payer.address.country_code,
      "EMAIL: "+okPaypal.payer.email_address,
      "TLF: "+okPaypal.payer.phone.phone_number.national_number,
      ], 10, varY).setFontSize(8);

    //Sumamos 20 por linea
    varY+=100;

    let body_factura = [];
    let contar_total = 0;
    let articulos = 0;

    simple.forEach(se => {
      body_factura.push ([se.name, se.quantity, se.unit_amount.value, se.quantity*se.unit_amount.value]);
      contar_total+=se.quantity*se.unit_amount.value;
      articulos++;
    })
    body_factura.push ([""]);    
    body_factura.push(["Total " + articulos + " articulos", "IVA 12%", " ", "Precio Total " + contar_total]);

    autoTable(doc, {
      startY: varY,
      head: [['Nombre', 'Cantidad', 'Precio Unitario', 'Precio Total']],
      body: body_factura,
    })

    doc.save(`factura_`+id+`.pdf`);
  }
}
