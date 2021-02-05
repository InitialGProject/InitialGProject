import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// componentes generales
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LateralbarComponent } from './lateralbar/lateralbar.component';
import { InicioComponent } from './inicio/inicio.component';

// modulos de la pagina
import { NoticiasModule } from './noticias/noticias.module';
import { AudiovisualesModule } from './audiovisuales/audiovisuales.module';
import { JuegosModule } from './juegos/juegos.module';
import { TorneosModule } from './torneos/torneos.module';
import { ForoModule } from './foro/foro.module';
import { PerfilModule } from './perfil/perfil.module';

// modulos extra
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LateralbarComponent,
    InicioComponent,
    FooterComponent,
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
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
