import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaVideosComponent } from './vista-videos/vista-videos.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { DetalleAudiovisualesComponent } from './detalle-audiovisuales/detalle-audiovisuales.component';



@NgModule({
  declarations: [VistaVideosComponent, VistaStreammingsComponent, VistaAudiovisualesComponent, DetalleAudiovisualesComponent],
  imports: [
    CommonModule
  ]
})
export class AudiovisualesModule { }
