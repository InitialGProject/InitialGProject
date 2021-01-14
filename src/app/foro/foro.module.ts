import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaForoComponent } from './vista-foro/vista-foro.component';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';



@NgModule({
  declarations: [VistaForoComponent, DetalleForoComponent],
  imports: [
    CommonModule
  ]
})
export class ForoModule { }
