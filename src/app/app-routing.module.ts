import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaNoticiaComponent } from './noticias/vista-noticia/vista-noticia.component';

import { VistaAudiovisualesComponent } from './audiovisuales/vista-audiovisuales/vista-audiovisuales.component';

import { VistaTorneosComponent } from './torneos/vista-torneos/vista-torneos.component';
import { DetalleTorneosComponent } from './torneos/detalle-torneos/detalle-torneos.component';

import { VistaJuegosComponent } from './juegos/vista-juegos/vista-juegos.component';

import { VistaForoComponent } from './foro/vista-foro/vista-foro.component';

import { JuegodadosComponent } from './juegos/juegodados/juegodados.component';

const routes: Routes = [
  {
    path: 'vista-noticias',
    component: VistaNoticiaComponent
  },
  {
    path: 'vista-audiovisuales',
    component: VistaAudiovisualesComponent
  },
  {
    path: 'vista-juegos',
    component: VistaJuegosComponent
  },
  {
    path: 'vista-foro',
    component: VistaForoComponent
  },
  {
    path: 'vista-torneos',
    component: VistaTorneosComponent
  },
  {
    path:'detalle-torneo',
    component: DetalleTorneosComponent
  },
  {
    path: 'juegodados',
    component: JuegodadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
