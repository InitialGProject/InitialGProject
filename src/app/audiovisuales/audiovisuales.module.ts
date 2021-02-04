import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Componentes de AudioVisuales
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';

// Módulos Extra
import { YouTubePlayerModule } from "@angular/youtube-player";

const audiovisuales: Routes = [
  {
    path: 'vista-audiovisules',
    component: VistaAudiovisualesComponent
  },
  {
    path: 'vista-streammings',
    component: VistaStreammingsComponent
  }
];

@NgModule({
  declarations: [VistaStreammingsComponent, VistaAudiovisualesComponent ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    RouterModule.forChild(audiovisuales)
  ],
  exports: [RouterModule]
})

export class AudiovisualesModule { }
