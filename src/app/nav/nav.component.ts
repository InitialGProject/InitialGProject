import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  // @Input() opciones: string[];
  // @Input() colorfondo: string;
  // @Output() presionopcion = new EventEmitter();

  constructor() { }

  ngOnInit() {

    // $(".icon").on("click", function () {
    //   $("#navbar").hasClass("navbar")
    //   $("#navbar").toggleClass("responsive");
    // });
  }

  /*presion(i: number): void {
    this.presionopcion.emit(i);
  }*/
}
