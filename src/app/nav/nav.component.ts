import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

// Dialogos de angular/material
import { MatDialog } from '@angular/material/dialog';

// Reglamento de Torneos
import { VistaReglamentoComponent } from '../torneos/vista-reglamento/vista-reglamento.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  @Input() opciones: string[];
  @Input() colorfondo: string;
  @Output() presionopcion = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(VistaReglamentoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {

    $(".icon").on("click", function () {
      $("#navbar").hasClass("navbar")
      $("#navbar").toggleClass("responsive");
    });
  }

  /*presion(i: number): void {
    this.presionopcion.emit(i);
  }*/
}
