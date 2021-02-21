import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

const contact: Routes = [
    {
        path: 'contact', component: LayoutComponent,
        children: [
            { path: 'sobre-nosotros', component: SobreNosotrosComponent },
            { path: 'sugerencias', component: SugerenciasComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(contact)],
    exports: [RouterModule]
})

export class ContactRoutingModule { }