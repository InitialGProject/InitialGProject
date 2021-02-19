import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Videos } from '../models/videos';

// const videos = 'http://localhost:8080/videos'; 
const videos = 'http://alum3.iesfsl.org/api/videos';

@Injectable({
  providedIn: 'root'
})
export class AudiovisualesService {
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Videos> {
    return this.http.get<Videos>(videos);
  }
}
