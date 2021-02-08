import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleActualComponent } from './detalle-actual/detalle-actual.component';
import { RutasComponent } from '../rutas/rutas.component';
import { TorneoActualComponent } from './torneo-actual.component';

const torneos: Routes = [
    {
        path: 'torneo-actual', component: RutasComponent,
        children: [
            { path: 'torneo-actual', component: TorneoActualComponent },
            { path: 'detalle-actual', component: DetalleActualComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(torneos)],
    exports: [RouterModule]
})

export class TorneosRoutingModule { }