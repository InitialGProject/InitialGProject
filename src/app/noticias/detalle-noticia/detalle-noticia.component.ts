import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/noticia';
import { NoticiasService } from '../services/noticias.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  ID: {id:number};
  noticias: Noticia;

  constructor(
    private servicioNoticias: NoticiasService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dameNoticias();
  }

  dameNoticias(): void {
    this.ID = {
      id:this.rutaActiva.snapshot.params.id
    }
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
