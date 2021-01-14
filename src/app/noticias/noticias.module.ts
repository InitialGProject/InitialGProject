import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaNoticiaComponent } from './vista-noticia/vista-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';



@NgModule({
  declarations: [VistaNoticiaComponent, DetalleNoticiaComponent],
  imports: [
    CommonModule
  ]
})
export class NoticiasModule { }
