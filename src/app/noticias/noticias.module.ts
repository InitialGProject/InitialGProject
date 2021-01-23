import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes de noticias
import { VistaNoticiaComponent } from './vista-noticia/vista-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

// modulo de paginacion
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [VistaNoticiaComponent, DetalleNoticiaComponent],
  imports: [
    CommonModule,
    MatPaginatorModule
  ]
})

export class NoticiasModule { }
