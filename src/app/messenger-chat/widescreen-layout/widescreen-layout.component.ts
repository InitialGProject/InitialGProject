import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "./../../data-sharing.service";

@Component({
  selector: "app-widescreen-layout",
  templateUrl: "./widescreen-layout.component.html",
  styleUrls: ["./widescreen-layout.component.scss"],
})
export class WidescreenLayoutComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {}
}
