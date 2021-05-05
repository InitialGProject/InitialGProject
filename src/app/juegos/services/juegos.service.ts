import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Juegos } from '../models/juegos';
import { Categorias } from '../models/categorias';

//variable
import {GlobalVars} from '../../globalVars';

//Ruta de la api
const juego = GlobalVars.ruta+'juegos';
const categorias = GlobalVars.ruta+'categorias';

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
