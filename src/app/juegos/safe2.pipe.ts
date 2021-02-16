import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe2'
})
export class Safe2Pipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){
    this.sanitizer = sanitizer;
  }
  
  transform(url) {
    console.log(url);
    var nuevaURL= this.sanitizer.bypassSecurityTrustUrl(url).changingThisBreaksApplicationSecurity;
    console.log(nuevaURL);
    return nuevaURL; 
  }
}
