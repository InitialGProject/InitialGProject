import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthGuardService) { }

  ngOnInit(): void {
   // this.auth.logout();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }
}
