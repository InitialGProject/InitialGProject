import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { StreammingsComponent } from './streammings/streammings.component';
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { DetalleAudiovisualesComponent } from './detalle-audiovisuales/detalle-audiovisuales.component';



@NgModule({
  declarations: [VideosComponent, StreammingsComponent, VistaAudiovisualesComponent, DetalleAudiovisualesComponent],
  imports: [
    CommonModule
  ]
})
export class AudiovisualesModule { }
