import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Juegos } from '../models/juegos';
import { Categorias } from '../models/categorias';

//variable
import {GlobalVars} from '../../globalVars';

//Login
import { LoginComponent } from 'src/app/account/login/login.component';

//Ruta de la api
const juego = GlobalVars.ruta+'juegos';
const categorias = GlobalVars.ruta+'categorias';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(
    private http: HttpClient,
    private CargaLogin:LoginComponent,
    ) { }

  getAll(): Observable<Juegos> {
    return this.http.get<Juegos>(juego);
  }

  getCategorias(): Observable<Categorias> {
    return this.http.get<Categorias>(categorias);
  }

  //Sacar el usuario logueado
  getUserLog(){
    this.CargaLogin.userLocal();
  }
}
