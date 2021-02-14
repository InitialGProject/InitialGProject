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
            { path: 'detalle-juegos/:id', component: DetalleJuegosComponent },
            { path: 'RE/detalle-juegos/:id', component: DetalleJuegosComponent }

        ]
    },
    {
        path: 'juego/:id', component: JuegoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(juegos)],
    exports: [RouterModule]
})

export class JuegosRoutingModule { }