import { Component, OnInit } from '@angular/core';
let apiKey = "AIzaSyAeoW2rf-X11QTEKKOCgRZ6VZX3vA7xfiU&"
let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&maxResults=15&key="
let videos
let word = "&q="
@Component({
  selector: 'app-vista-audiovisuales',
  templateUrl: './vista-audiovisuales.component.html',
  styleUrls: ['./vista-audiovisuales.component.scss']
})
export class VistaAudiovisualesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.searchFunction("gameplay")
  }
  response =  ["DcmZpcZl0qg", "ktDItuU-G8w", "cSwuvXKqfRM", "sxDSAl08slU", "orDRnUXu-Rw", "FLpiDFE991g", "9Fcx_UYTAIE", "tUicuMsgUGs", "HTssTMmCNfM", "FApX-M_DrDc", "TLa52NO8pms", "-os4vj6vEo8", "G51GkSmQAmQ", "YG5rwL3sqzg", "09l3Px5A-LU"]
  pageTitle = "VIDEOS"  
  videosFromApi = videos
  searchFunction = (text) => {
    fetch(url+apiKey+word+text).then((resp) => { 
      resp.json().then((jsonResp) => {
         let aux = []
         jsonResp.items.forEach(element => {
           aux.push(element.id.videoId )
         });
         this.response = aux
      })
    })
  }

}
