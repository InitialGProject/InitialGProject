import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { LayoutComponent } from './layout/layout.component';

const juegos: Routes = [
    {
        path: 'vista-juegos', component: LayoutComponent,
        children: [
            { path: 'vista-juegos', component: VistaJuegosComponent },
            { path: 'detalle-juegos', component: DetalleJuegosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(juegos)],
    exports: [RouterModule]
})

export class JuegosRoutingModule { }