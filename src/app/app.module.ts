import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LateralbarComponent } from './lateralbar/lateralbar.component';
import { TorneosModule } from './torneos/torneos.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LateralbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TorneosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
