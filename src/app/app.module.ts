import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// componentes generales
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LateralbarComponent } from './lateralbar/lateralbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './_components/alert/alert.component';

// modulos de la pagina
import { NoticiasModule } from './noticias/noticias.module';
import { AudiovisualesModule } from './audiovisuales/audiovisuales.module';
import { JuegosModule } from './juegos/juegos.module';
import { TorneosModule } from './torneos/torneos.module';
import { ForoModule } from './foro/foro.module';
import { PerfilModule } from './perfil/perfil.module';
import { ContactModule } from './contact/contact.module';

// modulos extra
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

//variables globales
import { GlobalVars } from './globalVars';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LateralbarComponent,
    InicioComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoticiasModule,
    AudiovisualesModule,
    JuegosModule,
    TorneosModule,
    ForoModule,
    PerfilModule,
    ContactModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    GlobalVars
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
