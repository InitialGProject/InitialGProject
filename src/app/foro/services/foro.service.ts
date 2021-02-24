import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos de Entradas y Comentarios del Foro
import { Entradas } from '../models/entradas';
import { Comentarios } from '../models/comentarios';

 const entradas = 'http://alum3.iesfsl.org/api/entradas';
 const comentarios = 'http://alum3.iesfsl.org/api/comentarios';
// const entradas = 'http://localhost:8080/entradas';
// const comentarios = 'http://localhost:8080/comentarios';

@Injectable({
  providedIn: 'root'
})

export class ForoService {

  constructor(private http: HttpClient) { }

  getEntradas(auth): Observable<Entradas> {
    return this.http.get<Entradas>(entradas, {
      headers: {
        Authorization: 'Bearer ' + auth,
      }
    });
  }

  getComentarios(auth): Observable<Comentarios> {
    return this.http.get<Comentarios>(comentarios, {
      headers: {
        Authorization: 'Bearer ' + auth,
      }
    });
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
