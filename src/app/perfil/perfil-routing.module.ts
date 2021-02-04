import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './layout/layout.component';

const perfil: Routes = [
    {
        path: 'login', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            // { path: 'registro', component: RegistroComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(perfil)],
    exports: [RouterModule]
})

export class PerfilRoutingModule { }