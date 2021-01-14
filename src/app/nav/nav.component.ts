import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() opciones: string[];
  @Input() colorfondo: string;
  @Output() presionopcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  presion(i: number): void {
    this.presionopcion.emit(i);
  }
}
