import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

//BS
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  isUserLoggedIn: boolean;
  token: any;


  constructor(private dataSharingService: DataSharingService) { 
    // Suscribir para que se actualice auto 
    // "isUserLoggedIn" o el que sea cuando cambie el valor.
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });

    //Datos del token sobrecargado
    this.dataSharingService.token.subscribe( value => {
      this.token = value;
      //console.log("test"+this.token);
    });
  }

  ngOnInit() {

  }

  borrarUser(){
    localStorage.removeItem('usuario');
    localStorage.clear();
  }
}
