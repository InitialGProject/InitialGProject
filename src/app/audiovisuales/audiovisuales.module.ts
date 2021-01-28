import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componentes de AudioVisuales
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';
import { DetalleAudiovisualesComponent } from './detalle-audiovisuales/detalle-audiovisuales.component';

// Módulos Extra


const audiovisuales: Routes = [
  {
    path: 'vista-audiovisules',
    component: VistaAudiovisualesComponent
  },
  {
    path: 'vista-streammings',
    component: VistaStreammingsComponent
  },
  {
    path: 'detalle-audiovisuales',
    component: DetalleAudiovisualesComponent
  }
];

@NgModule({
  declarations: [VistaStreammingsComponent, VistaAudiovisualesComponent, DetalleAudiovisualesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(audiovisuales)
  ],
  exports: [RouterModule]
})

export class AudiovisualesModule { }
