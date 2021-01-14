import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juegos-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})
export class DadoComponent implements OnInit {

  @Input() valor!: number;

  constructor() { }
    
  ngOnInit() {
  }

}