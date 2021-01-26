import { Component } from '@angular/core';

// Modulos de Formularios de Angular Material
import { FormControl, FormGroup } from '@angular/forms';

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
