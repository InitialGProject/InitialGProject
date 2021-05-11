import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioTiendaComponent } from './inicio-tienda/inicio-tienda.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { TiendaRoutingModule } from './tienda.routing';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarritoComponent } from './carrito/carrito.component';

import {FormsModule} from '@angular/forms';
import { FacturasComponent } from './facturas/facturas.component';

@NgModule({
  declarations: [InicioTiendaComponent, VistaProductoComponent, CarritoComponent, FacturasComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    TiendaRoutingModule,
    FormsModule,

  ]
})
export class TiendaModule { }
