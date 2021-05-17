import { Component } from '@angular/core';
//import * as $ from 'jquery';

//BS
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-lateralbar',
  templateUrl: './lateralbar.component.html',
  styleUrls: ['./lateralbar.component.scss']
})
export class LateralbarComponent {
  
  isUserLoggedIn: boolean;
  token: any;
  
  constructor(private dataSharingService: DataSharingService) {
    //Carga si esta logueado o no 
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });

    //Carga el token sobrecargado
    this.dataSharingService.token.subscribe( value => {
      this.token = value;
    });
  }
}
