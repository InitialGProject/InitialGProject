import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vista-video',
  templateUrl: './vista-video.component.html',
  styleUrls: ['./vista-video.component.scss']
})
export class VistaVideoComponent implements OnInit {

  constructor( private router: Router, private sanitizer:DomSanitizer ) { }

  ngOnInit(): void {
    this.setVideoUrl(this.router.url.split("/")[3])  
  } 
  videoUrl
  setVideoUrl(id) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + id);    
  }
  


}