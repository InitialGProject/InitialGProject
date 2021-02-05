import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-juegos-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.scss']
})
export class VistaJuegosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
    $('a').each(function () {
      if ($(this).attr('href') == "") {
        $(this).hide();
      }
    });
  **/
  }


}
