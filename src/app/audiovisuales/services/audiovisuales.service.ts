import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Videos } from '../models/videos';

import {GlobalVars} from '../../globalVars';

//Ruta de la api
const videos = GlobalVars.ruta+'videos';

@Injectable({
  providedIn: 'root'
})
export class AudiovisualesService {
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Videos> {
    return this.http.get<Videos>(videos);
  }
}
