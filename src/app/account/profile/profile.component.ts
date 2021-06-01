import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/_models/user-interface';
import { AccountService } from 'src/app/_services/account.service';

import { GlobalVars } from '../../globalVars';
import { LoginComponent } from 'src/app/account/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html', })

export class ProfileComponent implements OnInit {

  constructor(
    private globalVars: GlobalVars,
    private loginComponent:LoginComponent,
    ) { }
  // user: UserInterface;
  //Objeto Token que filtrara usuarios y nos da lo que necesitemos
   public TUser: any;

  ngOnInit() {
    this.loginComponent.userLocal();
    
    // this.user = this.authService.getCurrentUser();
    this.TUser=this.globalVars.getglobalUserToken();
    //console.log(this.TUser);
  }

  logout(){
    this.TUser===undefined;
    localStorage.removeItem('usuario');
    window.location.reload();
  }
}