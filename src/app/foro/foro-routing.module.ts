import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaForoComponent } from './vista-foro/vista-foro.component';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';
import { LayoutComponent } from './layout/layout.component';

const foro: Routes = [
    {
        path: 'vista-foro', component: LayoutComponent,
        children: [
            { path: 'foro', component: VistaForoComponent },
            { path: 'detalle-foro/:id', component: DetalleForoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(foro)],
    exports: [RouterModule]
})

export class ForoRoutingModule { }