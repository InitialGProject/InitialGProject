import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';



let apiKey = "AIzaSyAeoW2rf-X11QTEKKOCgRZ6VZX3vA7xfiU&"
let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&maxResults=15&key="
let word = "&q="
@Component({
  selector: 'app-vista-audiovisuales',
  templateUrl: './vista-audiovisuales.component.html',
  styleUrls: ['./vista-audiovisuales.component.scss']
})
export class VistaAudiovisualesComponent implements OnInit {

  constructor(public dialog: MatDialog, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  videoUrl
  mostrarVideos = true
  videdoTitles = ["WEREWOLF THE APOCALYPSE EARTHBLOOD ...", "THE LAST OF US 2 PS5 Gameplay 4K HD...", "WEREWOLF THE APOCALYPSE EARTHBLOOD ...", "STAR WARS BATTLEFRONT 2 ►SE VIENE l...", "🔴 NEW Airship Map In Among Us Game...", "HITMAN 3 Walkthrough Gameplay Part ...", "ASSASSIN&#39;S CREED VALHALLA Walkt...", "CALL OF DUTY BLACK OPS COLD WAR Cam...", "RESIDENT EVIL 8 PS5 Walkthrough Gam...", "THE MEDIUM Walkthrough Gameplay Par...", "Ajjubhai 45 Glo Wall World Record D...", "BATMAN GOTHAM KNIGHTS Gameplay 4K (...", "Little Nightmares - Gameplay Walkth...", "theRadBrad", "The Medium - O INÍCIO do gameplay d..."]
  response =  ["TA4IKZVYTGI", "orDRnUXu-Rw", "LCq8nl7Jcz8", "v2EQJsnFch8", "nlLLNN0kx8Y", "DcmZpcZl0qg", "FApX-M_DrDc", "uPHQb5JBppY", "FLpiDFE991g", "gRWZRz-Gf00", "dyVcCCa1hv4", "jAMGMKlBSV0", "hpukfqMhI1c", undefined, "wnWkseF6rvM"]
  searchFunction = (text) => {
    fetch(url+apiKey+word+text).then((resp) => { 
      resp.json().then((jsonResp) => {
         let aux = []
         let titleAux = []
         jsonResp.items.forEach(element => {
           aux.push(element.id.videoId )
           let titleToPush = element.snippet.title.match(/.{1,35}/g)
           titleAux.push( titleToPush[0] + (titleToPush[1] === undefined ? "" : "..."))
         });                  
         this.response = aux
         this.videdoTitles = titleAux
      })
    })
  }
}