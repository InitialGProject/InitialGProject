import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componentes de Foro
import { VistaForoComponent } from './vista-foro/vista-foro.component';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';

// Módulos Extra

const foro: Routes = [
  {
    path: 'vista-foro',
    component: VistaForoComponent
  },
  {
    path: 'detalle-foro',
    component: DetalleForoComponent
  }
];

@NgModule({
  declarations: [VistaForoComponent, DetalleForoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(foro)
  ],
  exports: [RouterModule]
})

export class ForoModule { }
