import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AudiovisualesRoutingModule } from './audiovisuales-routing.module';

// Componentes de AudioVisuales
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';

// Módulos Extra
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    VistaStreammingsComponent, 
    VistaAudiovisualesComponent, 
    LayoutComponent 
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    AudiovisualesRoutingModule

  ],
})

export class AudiovisualesModule { }
