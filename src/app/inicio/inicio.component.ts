import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// Modelos
import { User } from './../_models/user';
import { Noticia } from '../noticias/models/noticia';
import { Juegos } from '../juegos/models/juegos';
import { Videos } from '../audiovisuales/models/videos';

// Servicios
import { NoticiasService } from '../noticias/services/noticias.service';
import { AccountService } from './../_services/account.service';
import { JuegosService } from '../juegos/services/juegos.service';
import { AudiovisualesService } from '../audiovisuales/services/audiovisuales.service';


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
  video: Videos;

  constructor(
    private accountService: AccountService,
    private servicioNoticias: NoticiasService,
    private servicioJuegos: JuegosService, 
    private rutaActiva: ActivatedRoute,
    public dialog: MatDialog, 
    private servicioVideos: AudiovisualesService

  ) { this.user = this.accountService.userValue; }

  ngOnInit(): void {
    this.dameNoticias();
    this.dameJuegos();
    this.dameVideos();
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
  
  videoTitles = ["WEREWOLF THE APOCALYPSE EARTHBLOOD ...", "THE LAST OF US 2 PS5 Gameplay 4K HD...", "WEREWOLF THE APOCALYPSE EARTHBLOOD ...", "STAR WARS BATTLEFRONT 2 ►SE VIENE l...", "🔴 NEW Airship Map In Among Us Game...", "HITMAN 3 Walkthrough Gameplay Part ...", "ASSASSIN&#39;S CREED VALHALLA Walkt...", "CALL OF DUTY BLACK OPS COLD WAR Cam...", "RESIDENT EVIL 8 PS5 Walkthrough Gam...", "THE MEDIUM Walkthrough Gameplay Par...", "Ajjubhai 45 Glo Wall World Record D...", "BATMAN GOTHAM KNIGHTS Gameplay 4K (...", "Little Nightmares - Gameplay Walkth...", "theRadBrad", "The Medium - O INÍCIO do gameplay d..."]
  response =  ["TA4IKZVYTGI", "orDRnUXu-Rw", "LCq8nl7Jcz8", "v2EQJsnFch8", "nlLLNN0kx8Y", "DcmZpcZl0qg", "FApX-M_DrDc", "uPHQb5JBppY", "FLpiDFE991g", "gRWZRz-Gf00", "dyVcCCa1hv4", "jAMGMKlBSV0", "hpukfqMhI1c", undefined, "wnWkseF6rvM"]
  dameVideos(): void {
    this.servicioVideos.getVideos()
      .subscribe(
        infoVideos => {
          let videos = infoVideos
          for (let index in videos){
            this.videoTitles[index] = videos[index].titulo
            this.response[index] = videos[index].video
          }
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
