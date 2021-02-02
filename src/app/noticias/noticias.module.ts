import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes de noticias
import { VistaNoticiaComponent } from './vista-noticia/vista-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

// modulo de paginacion
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

const noticias: Routes = [
  {
    path: 'vista-noticia',
    component: VistaNoticiaComponent
  },
  {
    path: 'detalle-noticia',
    component: DetalleNoticiaComponent
  }
];

@NgModule({
  declarations: [VistaNoticiaComponent, DetalleNoticiaComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule.forChild(noticias)
  ],
  exports: [RouterModule]
})

export class NoticiasModule { }
