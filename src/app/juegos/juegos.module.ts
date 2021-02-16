import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { JuegosRoutingModule } from './juegos-routing.module';

// Componentes de Juegos
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { JuegoComponent } from './juego/juego.component';

// Módulos Extra
import { HttpClientModule } from '@angular/common/http';

//Pipe para sanear URL
import { Safe2Pipe } from './safe2.pipe';

@NgModule({
  declarations: [
    VistaJuegosComponent,
    DetalleJuegosComponent,
    LayoutComponent,
    JuegoComponent,
    Safe2Pipe
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    HttpClientModule
  ],
})

export class JuegosModule { }
