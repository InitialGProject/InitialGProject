import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-vista-noticia',
  templateUrl: './vista-noticia.component.html',
  styleUrls: ['./vista-noticia.component.scss']
})
export class VistaNoticiaComponent implements OnInit {
  noticia: any;

  constructor(private noticias: NoticiasService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.noticias.getAll()
      .subscribe(
        data => {
          this.noticia = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
