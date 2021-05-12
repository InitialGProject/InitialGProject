import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    //Logueado
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    //Token
    public token: BehaviorSubject<any> = new BehaviorSubject<any>('');

    //testeo
    public testeo: BehaviorSubject<string> = new BehaviorSubject<string>("NO");

    //Carrito
    public carro: BehaviorSubject<any> =new BehaviorSubject<any>([]);

    //precio total del carro
    public precio_total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    //id Usuario
    public iduseract: BehaviorSubject<number> = new BehaviorSubject<number>(0);

}