import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public token: BehaviorSubject<any> = new BehaviorSubject<any>('');

}