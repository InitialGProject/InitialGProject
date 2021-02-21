import { Component, OnInit } from '@angular/core';

// Modelos
import { User } from './../_models/user';
import { Noticia } from '../noticias/models/noticia';

// Servicios
import { NoticiasService } from '../noticias/services/noticias.service';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  noticias: Noticia;
  user: User;

  constructor(
    private accountService: AccountService,
    private servicioNoticias: NoticiasService,

  ) { this.user = this.accountService.userValue; }

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

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
  }

}
