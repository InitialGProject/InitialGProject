import { Component, OnInit } from '@angular/core';

// Modelos
import { User } from './../_models/user';
import { Noticia } from '../noticias/models/noticia';
import { Juegos } from '../juegos/models/juegos';

// Servicios
import { NoticiasService } from '../noticias/services/noticias.service';
import { AccountService } from './../_services/account.service';
import { JuegosService } from '../juegos/services/juegos.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  noticias: Noticia;
  tipo: {clase: string};
  juego: Juegos;
  user: User;

  constructor(
    private accountService: AccountService,
    private servicioNoticias: NoticiasService,
    private servicioJuegos: JuegosService, 
    private rutaActiva: ActivatedRoute

  ) { this.user = this.accountService.userValue; }

  ngOnInit(): void {
    this.dameNoticias();
    this.dameJuegos();

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

  dameJuegos(): void {

    this.tipo = {
      clase: this.rutaActiva.snapshot.params.clase
    };
    
    this.servicioJuegos.getAll()
      .subscribe(
        data => {
          this.juego = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
  }

}
