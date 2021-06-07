import { Component, OnInit } from "@angular/core";

// Servicios
import { MessengerService } from "../services/messenger.service";

@Component({
  selector: "app-sidechat-layout",
  templateUrl: "./sidechat-layout.component.html",
  styleUrls: ["./sidechat-layout.component.scss"],
})
export class SidechatLayoutComponent implements OnInit {
  parametro;

  constructor(public sM: MessengerService) {
    this.parametro = this.sM.parametro;
  }

  ngOnInit(): void {}
}
