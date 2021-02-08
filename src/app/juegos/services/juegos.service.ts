import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Juegos } from '../models/juegos';

const baseUrl = 'http://localhost:8080/juegos';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Juegos> {
    return this.http.get<Juegos>(baseUrl);
  }
}
