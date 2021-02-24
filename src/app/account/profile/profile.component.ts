import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/_models/user-interface';

import { GlobalVars } from '../../globalVars';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html', })

export class ProfileComponent implements OnInit {

  constructor(
    private globalVars: GlobalVars
    ) { }
  // user: UserInterface;
  //Objeto Token que filtrara usuarios y nos da lo que necesitemos
   public TUser: any;

  ngOnInit() {
    // this.user = this.authService.getCurrentUser();
    this.TUser=this.globalVars.getglobalUserToken();
    console.log(this.TUser);
  }

  logout(){
    this.TUser===undefined;
    window.location.reload();
  }
}