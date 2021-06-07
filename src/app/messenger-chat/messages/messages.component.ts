import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "./../../data-sharing.service";
import { Messages } from "../models/messages";
import { MessengerService } from "../services/messenger.service";
import { WebsocketService } from "../services/websocket.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Contacts } from "../models/contacts";
import { Chat_user } from "../models/chat_user";
import { Chat } from "../models/chat";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  isUserLoggedIn: boolean;
  iduseract: number;
  contacts: Contacts;
  chatuser: Chat_user;
  chat: Chat;
  messages: Messages;
  text = "";
  scrollOp: any;
  parametro;

  constructor(
    private dataSharingService: DataSharingService,
    public sM: MessengerService
  ) {
    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
    //id usuariologged
    this.dataSharingService.iduseract.subscribe((value) => {
      this.iduseract = value;
    });

    this.parametro = this.sM.parametro;

    // Obtener chat-user
    this.sM.getChatuser().subscribe(
      (data) => {
        this.chatuser = data;
        console.log("Chat chatuser", data);
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener chats
    this.sM.getChat().subscribe(
      (data) => {
        this.chat = data;
        console.log("Chat de messages", data);
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener mensajes
    this.sM.getMessages().subscribe(
      (data) => {
        this.messages = data;

        setTimeout(() => {
          this.scrollOp.scrollTop = this.scrollOp.scrollHeight;
        }, 50);
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener contactos
    this.sM.getContacts().subscribe(
      (data) => {
        this.contacts = data;
        console.log("this.contacts: ", data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.scrollOp = document.getElementById("chat");
  }

  // Envia el mensaje al servicio sendMessage de messengerService.ts para enviarlo al socket y a la bbdd
  sendMessage() {
    let dateTime = "2021-06-05 15:30:34";
    let messageInfo = {
      chat_id: this.sM.parametro,
      sender_id: this.iduseract,
      message: this.text,
      mdate: dateTime,
    };
    if (this.text.length === 0) {
      return;
    } else {
      this.sM.sendMessage(messageInfo).subscribe(() => {
        this.scrollOp.scrollTop = this.scrollOp.scrollHeight;
        console.log("Mensaje enviado");
      });
      this.text = "";
    }
  }
}
