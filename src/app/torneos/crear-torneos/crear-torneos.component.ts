import { Component } from '@angular/core';

// Controlador de fechas de Formularios
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-torneos',
  templateUrl: './crear-torneos.component.html',
  styleUrls: ['./crear-torneos.component.scss']
})

export class CrearTorneosComponent {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

}
