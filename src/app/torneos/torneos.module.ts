import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de Torneos
import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { VistaReglamentoComponent } from './vista-reglamento/vista-reglamento.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';
import { TorneoActualComponent } from './torneo-actual/torneo-actual.component';
import { DetalleActualComponent } from './torneo-actual/detalle-actual/detalle-actual.component';
import { TorneoRetroComponent } from './torneo-retro/torneo-retro.component';
import { DetalleRetroComponent } from './torneo-retro/detalle-retro/detalle-retro.component';

// Rutas Fijas
import { RutasComponent } from './rutas/rutas.component';
import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneoActualModule } from './torneo-actual/torneo-actual.module';

// Módulos Extra
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    VistaTorneosComponent,
    VistaReglamentoComponent,
    CrearTorneosComponent, 
    TorneoActualComponent,
    DetalleActualComponent,
    TorneoRetroComponent,
    DetalleRetroComponent,
    RutasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    TorneosRoutingModule,
    TorneoActualModule
  ]
})

export class TorneosModule { }
