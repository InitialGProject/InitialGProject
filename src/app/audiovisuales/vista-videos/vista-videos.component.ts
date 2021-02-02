import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-vista-videos',
  templateUrl: './vista-videos.component.html',
  styleUrls: ['./vista-videos.component.scss']
})
export class VistaVideosComponent implements OnInit {

  constructor(
    //para acceder a la data la tenemos que inyectar
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer:DomSanitizer
 ) { }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
  }
  Url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.data.video );
}
