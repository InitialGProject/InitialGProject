import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Juegos } from '../models/juegos';
import { Categorias } from '../models/categorias';

const juego = 'http://alum3.iesfsl.org/api/juegos';
const categorias = 'http://alum3.iesfsl.org/api/categorias';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Juegos> {
    return this.http.get<Juegos>(juego);
  }

  getCategorias(): Observable<Categorias> {
    return this.http.get<Categorias>(categorias);
  }
}
