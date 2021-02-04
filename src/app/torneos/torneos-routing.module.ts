import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { VistaReglamentoComponent } from './vista-reglamento/vista-reglamento.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';
import { TorneoActualComponent } from './torneo-actual/torneo-actual.component';
import { TorneoRetroComponent } from './torneo-retro/torneo-retro.component';
import { RutasComponent } from './rutas/rutas.component';

const torneos: Routes = [
    {
        path: 'vista-torneos', component: RutasComponent,
        children: [
            { path: 'torneos', component: VistaTorneosComponent },
            { path: 'crearTorneo', component: CrearTorneosComponent },
            { path: 'torneoActual', component: TorneoActualComponent },
            { path: 'torneoRetro', component: TorneoRetroComponent },
            { path: 'vista-reglamento', component: VistaReglamentoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(torneos)],
    exports: [RouterModule]
})

export class TorneosRoutingModule { }