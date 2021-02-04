import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PerfilRoutingModule } from './perfil-routing.module';

// Componente de Perfil
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent, 
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ],
})

export class PerfilModule { }
