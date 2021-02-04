import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de Torneos
import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';
import { TorneoActualComponent } from './torneo-actual/torneo-actual.component';
import { TorneoRetroComponent } from './torneo-retro/torneo-retro.component';
import { VistaReglamentoComponent } from './vista-reglamento/vista-reglamento.component';

// Rutas Fijas
import { RutasComponent } from './rutas/rutas.component';
import { TorneosRoutingModule } from './torneos-routing.module';

// Módulos Extra
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    CrearTorneosComponent, 
    VistaTorneosComponent,
    VistaReglamentoComponent,
    TorneoActualComponent,
    TorneoRetroComponent,
    RutasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    TorneosRoutingModule
  ]
})

export class TorneosModule { }
