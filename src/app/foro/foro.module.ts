import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ForoRoutingModule } from './foro-routing.module';

// Componentes de Foro
import { VistaForoComponent } from './vista-foro/vista-foro.component';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';

// Módulos Extra

@NgModule({
  declarations: [
    VistaForoComponent, 
    DetalleForoComponent, 
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule
  ],
})

export class ForoModule { }
