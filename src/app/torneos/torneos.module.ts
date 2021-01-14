import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { DetalleTorneosComponent } from './detalle-torneos/detalle-torneos.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';


@NgModule({
  declarations: [DetalleTorneosComponent, CrearTorneosComponent, VistaTorneosComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NoticiasModule { }
