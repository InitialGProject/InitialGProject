import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "./../../data-sharing.service";
import { Messages } from "../models/messages";
import { MessengerService } from "../services/messenger.service";
import { WebsocketService } from "../services/websocket.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  isUserLoggedIn: boolean;
  iduseract: number;

  messages: Messages;
  text = "";

  constructor(
    private dataSharingService: DataSharingService,
    public sM: MessengerService,
    private socket: WebsocketService
  ) {
    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
    //id usuariologged
    this.dataSharingService.iduseract.subscribe((value) => {
      this.iduseract = value;
    });

    this.sM.getMessages().subscribe(
      (data) => {
        this.messages = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // this.servicioMessages.messages.subscribe((msg) => {
    //   console.log(msg);
    // });
  }

  sendMessage() {
    let messageInfo = {
      text: this.text,
      messageType: 1,
      sender_id: this.iduseract,
    };
    this.sM.sendMessage(messageInfo);
    this.text = "";

    // console.log("Mensaje: ", this.message);
    // if (this.message.length === 0) {
    //   return;
    // }
    // this.servicioMessages.createMessage(this.message);
    // // .then(() => (this.mensaje = ""))
    // // .catch((error) => console.error("Error al enviar", error));
  }
}
