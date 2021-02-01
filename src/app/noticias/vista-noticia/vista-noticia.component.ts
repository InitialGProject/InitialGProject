import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-vista-noticia',
  templateUrl: './vista-noticia.component.html',
  styleUrls: ['./vista-noticia.component.scss']
})
export class VistaNoticiaComponent implements OnInit {
  noticias: NoticiasService[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
