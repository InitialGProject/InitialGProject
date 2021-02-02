import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';

// Noticias
import { VistaNoticiaComponent } from './noticias/vista-noticia/vista-noticia.component';

// AudioVisuales
import { VistaAudiovisualesComponent } from './audiovisuales/vista-audiovisuales/vista-audiovisuales.component';
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
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '#',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
