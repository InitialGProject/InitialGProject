import { Component, OnInit } from '@angular/core';
import { User } from './../_models/user';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent {

  noticias = [{ titulo: 'Proyecto InitialG', a: 'Version: beta' }];

  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;    
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');    
  }

}
