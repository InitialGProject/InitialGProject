import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NoticiasRoutingModule } from './noticias-routing.module';

// Componentes de noticias
import { VistaNoticiaComponent } from './vista-noticia/vista-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

// Modulos extra
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VistaNoticiaComponent, 
    DetalleNoticiaComponent, 
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    HttpClientModule,
    NoticiasRoutingModule
  ]
})

export class NoticiasModule { }
