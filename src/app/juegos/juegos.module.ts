import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';

@NgModule({
  declarations: [VistaJuegosComponent],
  imports: [
    CommonModule,
    VistaJuegosComponent,
  ]
})
export class JuegosModule { }
