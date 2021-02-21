import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de Contacto
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

// Rutas Fijas
import { LayoutComponent } from './layout/layout.component';
import { ContactRoutingModule } from './contact-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    SobreNosotrosComponent,
    SugerenciasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})

export class ContactModule { }
