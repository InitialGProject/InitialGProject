import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componentes de Torneos
import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';
import { TorneoActualComponent } from './torneo-actual/torneo-actual.component';
import { TorneoRetroComponent } from './torneo-retro/torneo-retro.component';

// Módulos Extra
import { MatCardModule } from '@angular/material/card';

const torneos: Routes = [
  {
    path: 'vista-torneo',
    component: VistaTorneosComponent
  },
  {
    path: 'crearTorneo',
    component: CrearTorneosComponent
  },
  {
    path: 'torneoActual',
    component: TorneoActualComponent
  },
  {
    path: 'torneoRetro',
    component: TorneoRetroComponent
  }
];

@NgModule({
  declarations: [CrearTorneosComponent, VistaTorneosComponent, TorneoActualComponent, TorneoRetroComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(torneos),
  ],
  exports: [RouterModule]
})

export class TorneosModule { }
