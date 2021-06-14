import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthGuardService } from "./perfil/services/auth-guard.service";
import { DataSharingService } from "./data-sharing.service";

import { LoginComponent } from "src/app/account/login/login.component";

//generar pdfs

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  login: boolean;
  title: any;
  sidechat = true;
  isUserLoggedIn: boolean;

  constructor(
    private auth: AuthGuardService,
    private CargaLogin: LoginComponent,
    private dataSharingService: DataSharingService
  ) {
    this.CargaLogin.userLocal();

    this.auth.isLoggedIn().subscribe(
      (data) => {
        this.login = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  onEdit() {
    window.scrollTo(0, 0);
  }

  openNavi() {
    document.getElementById("mySidenav").style.width = "18rem";
  }

  closeNavi() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
