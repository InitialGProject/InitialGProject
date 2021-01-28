import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componentes de Juegos
import { VistaJuegosComponent } from './vista-juegos/vista-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';

// Módulos Extra

const juegos: Routes = [
  {
    path: 'vista-juegos',
    component: VistaJuegosComponent
  },
  {
    path: 'detalle-juegos',
    component: DetalleJuegosComponent
  }
];

@NgModule({
  declarations: [VistaJuegosComponent, DetalleJuegosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(juegos)
  ],
  exports: [RouterModule]
})

export class JuegosModule { }
