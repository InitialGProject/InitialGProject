import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { LayoutComponent } from './layout/layout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SobreNosotrosComponent, 
    SugerenciasComponent, 
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ContactModule { }
