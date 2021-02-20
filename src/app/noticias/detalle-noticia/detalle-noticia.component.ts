import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/noticia';
import { NoticiasService } from '../services/noticias.service';
import { GlobalVars } from '../../globalVars';

import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})

export class DetalleNoticiaComponent implements OnInit {

  TITULO: { titulo: string };
  noticias: Noticia;
  userName: string;
  token: string

  constructor(
    private servicioNoticias: NoticiasService,
    private rutaActiva: ActivatedRoute,
    private globalVars: GlobalVars

  ) { }

  ngOnInit(): void {
    this.dameNoticias();
  }

  dameNoticias(): void {
    
    this.TITULO = {
      titulo: this.rutaActiva.snapshot.params.titulo
    };
    this.userName = this.globalVars.getGlobalUser()
    this.token = this.globalVars.getGlobalToken()

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.TITULO.titulo = params.titulo;
      });

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
