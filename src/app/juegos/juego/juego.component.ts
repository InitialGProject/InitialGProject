import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor() { }

  @Input() idj: number;
  
  ngOnInit(): void {
  
  }

}
