import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegodadosComponent } from './juegodados/juegodados.component';
import { DadoComponent } from './dado/dado.component';
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';


@NgModule({
  declarations: [VistaJuegosComponent],
  imports: [
    CommonModule,
    DadoComponent,
    JuegodadosComponent,
    VistaJuegosComponent
  ]
})
export class JuegosModule { }
