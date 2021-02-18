import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaAudiovisualesComponent } from './vista-audiovisuales/vista-audiovisuales.component';
import { VistaStreammingsComponent } from './vista-streammings/vista-streammings.component';
import { VistaVideoComponent } from './vista-video/vista-video.component';

import { LayoutComponent } from './layout/layout.component';

const audiovisuales: Routes = [
    {
        path: 'vista-audiovisuales', component: LayoutComponent,
        children: [
            { path: 'audiovisuales', component: VistaAudiovisualesComponent },
            { path: 'vista-streammings', component: VistaStreammingsComponent },
            { path: 'vistaVideo/:videoId', component: VistaVideoComponent },
            

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(audiovisuales)],
    exports: [RouterModule]
})

export class AudiovisualesRoutingModule { }