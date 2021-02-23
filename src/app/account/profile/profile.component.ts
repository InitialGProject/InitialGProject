import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserInterface } from 'src/app/_models/user-interface';

import { GlobalVars } from '../../globalVars';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html', })

export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private globalVars: GlobalVars
    ) { }
  // user: UserInterface;
    TUser: any;

  ngOnInit() {
    // this.user = this.authService.getCurrentUser();
    this.TUser=this.globalVars.getglobalUserToken();
    console.log(this.TUser);
  }

}