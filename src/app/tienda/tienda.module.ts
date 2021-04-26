import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioTiendaComponent } from './inicio-tienda/inicio-tienda.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { TiendaRoutingModule } from './tienda.routing';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [InicioTiendaComponent, VistaProductoComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    TiendaRoutingModule,

  ]
})
export class TiendaModule { }
