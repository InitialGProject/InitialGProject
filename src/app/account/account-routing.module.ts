import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';
import { DetalleSuscripcionBasicaComponent } from './detalle-suscripcion-basica/detalle-suscripcion-basica.component';
import { DetalleSuscripcionGamerComponent } from './detalle-suscripcion-gamer/detalle-suscripcion-gamer.component';



const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'suscripciones', component: SuscripcionesComponent},
            { path: 'detalle-suscripcion-basica', component: DetalleSuscripcionBasicaComponent },
            { path: 'detalle-suscripcion-gamer', component: DetalleSuscripcionGamerComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }