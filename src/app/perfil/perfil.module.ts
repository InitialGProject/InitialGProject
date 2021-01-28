import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componente de Perfil
import { LoginComponent } from './login/login.component';

const perfil: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(perfil)
  ],
  exports: [RouterModule]
})

export class PerfilModule { }
