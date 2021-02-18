import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AudiovisualesRoutingModule } from './audiovisuales-routing.module';

// Componentes de AudioVisuales
import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';
import { VistaVideoComponent } from './vista-video/vista-video.component';



@NgModule({
  declarations: [
    VistaStreammingsComponent, 
    VistaAudiovisualesComponent, 
    VistaVideoComponent,
    LayoutComponent 
  ],
  imports: [
    CommonModule,
    AudiovisualesRoutingModule

  ],
})

export class AudiovisualesModule { }
