import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { JuegosRoutingModule } from './juegos-routing.module';

// Componentes de Juegos
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { JuegoComponent } from './juego/juego.component';

// Módulos Extra
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    VistaJuegosComponent, 
    DetalleJuegosComponent, 
    LayoutComponent, 
    JuegoComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    HttpClientModule
  ],
})

export class JuegosModule { }
