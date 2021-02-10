import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaNoticiaComponent } from './vista-noticia/vista-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { LayoutComponent } from './layout/layout.component';

const noticias: Routes = [
    {
        path: 'vista-noticias', component: LayoutComponent,
        children: [
            { path: 'noticias', component: VistaNoticiaComponent },
            { path: 'detalle-noticia/:titulo', component: DetalleNoticiaComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(noticias)],
    exports: [RouterModule]
})

export class NoticiasRoutingModule { }