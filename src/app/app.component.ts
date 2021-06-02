import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthGuardService } from "./perfil/services/auth-guard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  login: boolean;

  constructor(private auth: AuthGuardService) {
    this.auth.isLoggedIn().subscribe(
      (data) => {
        this.login = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEdit() {
    window.scrollTo(0, 0);
  }

  openNavi() {
    document.getElementById("mySidenav").style.width = "20vw";
  }

  closeNavi() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
