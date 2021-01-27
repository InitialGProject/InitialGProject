import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Noticias
import { VistaNoticiaComponent } from './noticias/vista-noticia/vista-noticia.component';

// AudioVisuales
import { VistaAudiovisualesComponent } from './audiovisuales/vista-audiovisuales/vista-audiovisuales.component';
import { VistaVideosComponent } from './audiovisuales/vista-videos/vista-videos.component';
import { VistaStreammingsComponent } from './audiovisuales/vista-streammings/vista-streammings.component';

// Juegos
import { VistaJuegosComponent } from './juegos/vista-juegos/vista-juegos.component';

// Torneos
import { VistaTorneosComponent } from './torneos/vista-torneos/vista-torneos.component';

// Foro
import { VistaForoComponent } from './foro/vista-foro/vista-foro.component';

// Perfil
import { LoginComponent } from './perfil/login/login.component';


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
    path: 'vista-torneos',
    component: VistaTorneosComponent
  }, {
    path: 'vista-foro',
    component: VistaForoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
