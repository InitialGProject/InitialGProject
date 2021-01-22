import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones = [
    "NOTICIAS", "VIDEOS", "JUEGOS", "TORNEOS", "FORO"
  ];

  presion(op: number) {
    switch (op) {
      case 1:
        window.location.href = '/vista-noticias';
        break;
      case 2:
        window.location.href = '/vista-audiovisuales';
        break;
      case 3:
        window.location.href = '/vista-juegos';
        break;
      case 4:
        window.location.href = '/vista-torneos';
        break;
      case 5:
        window.location.href = '/vista-foro';
        break;
    }
  }
}