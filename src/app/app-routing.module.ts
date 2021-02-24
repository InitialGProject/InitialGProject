import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './_helpers/auth.guard';

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

import { SuscripcionesComponent } from './account/suscripciones/suscripciones.component';
import { DetalleSuscripcionBasicaComponent } from './account/detalle-suscripcion-basica/detalle-suscripcion-basica.component';
import { DetalleSuscripcionGamerComponent } from './account/detalle-suscripcion-gamer/detalle-suscripcion-gamer.component';





// Perfil
// import { LoginComponent } from './perfil/login/login.component';
//import { SobreNosotrosComponent } from './contact/sobre-nosotros/sobre-nosotros.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

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
    path: 'vista-juegos/:clase',
    component: VistaJuegosComponent
  },
  {
    path: 'vista-torneos',
    component: VistaTorneosComponent
  },
  {
    path: 'vista-foro',
    component: VistaForoComponent
  },
  {
    path: 'users',
    loadChildren: usersModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: accountModule
  },
  {
    path: 'account',
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suscripciones',
    component: SuscripcionesComponent
  },
  {
    path: 'detalle-suscripcion-gamer',
    component: DetalleSuscripcionGamerComponent
  },
  {
    path: 'detalle-suscripcion-basica',
    component: DetalleSuscripcionBasicaComponent
  },
  {
    path: '#',
    redirectTo: ''
  },
  {
    path: '',
    component: InicioComponent
  },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
