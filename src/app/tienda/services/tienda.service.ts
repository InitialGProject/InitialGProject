import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';

const productos = 'http://alum3.iesfsl.org/api/productos';
const categorias = 'http://alum3.iesfsl.org/api/productoscategoria';

// const catalogo = 'http://localhost:8080/catalogo';
// const categorias = 'http://localhost:8080/productoscategoria';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) { }

  getProd(): Observable<Catalogo> {
     return this.http.get<Catalogo>(productos);
  }

  getCategorias(): Observable<Categorias> {
    return this.http.get<Categorias>(categorias);
  }
}