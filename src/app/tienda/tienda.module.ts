import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioTiendaComponent } from './inicio-tienda/inicio-tienda.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { TiendaRoutingModule } from './tienda.routing';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarritoComponent } from './carrito/carrito.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FacturasComponent } from './facturas/facturas.component';

//pp
import { BrowserModule } from '@angular/platform-browser';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [InicioTiendaComponent, VistaProductoComponent, CarritoComponent, FacturasComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    TiendaRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbModule,
    NgxPayPalModule,
    BrowserModule,
    FormsModule,
    NgxPayPalModule  

  ]
})
export class TiendaModule { }
