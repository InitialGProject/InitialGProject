import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGuardService } from './perfil/services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: boolean;

  constructor(private auth: AuthGuardService) {
    this.auth.isLoggedIn()
      .subscribe(
        data => {
          this.login = data;

        },
        error => {
          console.log(error);
        });
  }

  onEdit(){
    window.scrollTo(0,0);
  }

  // opciones = [
  //   "NOTICIAS", "VIDEOS", "JUEGOS", "TORNEOS", "FORO"
  // ];

  // presion(op: number) {
  //   switch (op) {
  //     case 1:
  //       window.location.href = '/vista-noticias';
  //       break;
  //     case 2:
  //       window.location.href = '/vista-audiovisuales';
  //       break;
  //     case 3:
  //       window.location.href = '/vista-juegos';
  //       break;
  //     case 4:
  //       window.location.href = '/vista-torneos';
  //       break;
  //     case 5:
  //       window.location.href = '/vista-foro';
  //       break;
  //   }
  // }
}