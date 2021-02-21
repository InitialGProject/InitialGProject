import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/noticia';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-vista-noticia',
  templateUrl: './vista-noticia.component.html',
  styleUrls: ['./vista-noticia.component.scss']
})

export class VistaNoticiaComponent implements OnInit {

  noticias: Noticia;

  constructor(private servicioNoticias: NoticiasService) { }

  ngOnInit(): void {
    this.dameNoticias();
  }

  dameNoticias(): void {
    this.servicioNoticias.getAll()
      .subscribe(
        data => {
          this.noticias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
