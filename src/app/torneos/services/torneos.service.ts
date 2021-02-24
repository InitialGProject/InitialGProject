import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Torneos } from '../models/torneos';
import { ParticipantesTorneo } from '../models/participantes-torneo';

const torneos = 'http://alum3.iesfsl.org/api/torneos';
const participantes = 'http://alum3.iesfsl.org/api/participantestorneos';
// const torneos = 'http://localhost:8080/torneos';
// const torneos = 'http://localhost:8080/torneos';

@Injectable({
  providedIn: 'root',
})

export class TorneosService {

  constructor(private http: HttpClient) { }

  getTorneos(auth): Observable<Torneos> {
    return this.http.get<Torneos>(torneos,  {
      headers: {
        Authorization: 'Bearer ' + auth,
      }
    });
  }

  getParticipantes(): Observable<ParticipantesTorneo> {
    return this.http.get<ParticipantesTorneo>(participantes);
  }

  /* filtroCategorias(categoria: string): Observable<Torneos> {
    return this.http.get<Torneos>(`${torneos}?CategoriaDesc=${categoria}`);
  } */
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
