import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaNoticiaComponent } from './noticias/vista-noticia/vista-noticia.component';

import { VistaAudiovisualesComponent } from './audiovisuales/vista-audiovisuales/vista-audiovisuales.component';

import { VistaVideosComponent } from './audiovisuales/vista-videos/vista-videos.component';

import { VistaTorneosComponent } from './torneos/vista-torneos/vista-torneos.component';

import { VistaJuegosComponent } from './juegos/vista-juegos/vista-juegos.component';

import { VistaForoComponent } from './foro/vista-foro/vista-foro.component';
import { VistaStreammingsComponent } from './audiovisuales/vista-streammings/vista-streammings.component';

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
    path: 'vista-videos',
    component: VistaVideosComponent
  },
  {
    path: 'vista-streammings',
    component: VistaStreammingsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
