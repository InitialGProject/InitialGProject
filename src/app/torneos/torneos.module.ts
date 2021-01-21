import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';

const torneos: Routes = [
  {
    path: 'vista-torneo',
    component: VistaTorneosComponent
  },
  {
    path: 'crearTorneo',
    component: CrearTorneosComponent
  },
];

@NgModule({
  declarations: [CrearTorneosComponent, VistaTorneosComponent],
  imports: [RouterModule.forChild(torneos)],
  exports: [RouterModule]
})
export class TorneosModule { }
