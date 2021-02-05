import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { JuegosRoutingModule } from './juegos-routing.module';

// Componentes de Juegos
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { JuegoComponent } from './juego/juego.component';

// Módulos Extra

@NgModule({
  declarations: [
    VistaJuegosComponent, 
    DetalleJuegosComponent, 
    LayoutComponent, JuegoComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ],
})

export class JuegosModule { }
