import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Noticia } from '../models/noticia';

import {GlobalVars} from '../../globalVars';

//Ruta de la api
const baseUrl = GlobalVars.ruta+'noticias';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Noticia> {
    return this.http.get<Noticia>(baseUrl);
  }
}

/*
  create(data): Observable<Noticia> {
    return this.post(baseUrl, data);
  }

  update(id, data): Observable<Noticia> {
    return this.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<Noticia> {
    return this.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<Noticia> {
    return this.delete(baseUrl);
  }

  findByTitle(titulo): Observable<Noticia> {
    return this.get(`${baseUrl}?titulo=${titulo}`);
  }
*/
