import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  noticias = [{ titulo: 'Proyecto InitialG', a: 'Version: beta' }];

  constructor() { }

  ngOnInit(): void {
  }

}
