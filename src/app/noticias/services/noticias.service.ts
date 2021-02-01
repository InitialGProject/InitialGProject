import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Noticia } from '../models/noticia';

const baseUrl = 'http://localhost:8080/noticias';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor() { }

  getAll(): Observable<Noticia[]> {
    return this.get(baseUrl);
  }

  get(id): Observable<Noticia[]> {
    return this.get(`${baseUrl}/${id}`);
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
    return this.get(`${baseUrl}?title=${titulo}`);
  }
  */
