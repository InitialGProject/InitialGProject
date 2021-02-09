import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { JuegoComponent } from './juego/juego.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { LayoutComponent } from './layout/layout.component';

const juegos: Routes = [
    {
        path: 'vista-juegos', component: LayoutComponent,
        children: [
            { path: 'vista-juegos', component: VistaJuegosComponent },
            { path: 'juego/:id', component: JuegoComponent },
            { path: 'RE/juego/:id', component: JuegoComponent },
            { path: 'detalle-juegos', component: DetalleJuegosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(juegos)],
    exports: [RouterModule]
})

export class JuegosRoutingModule { }