import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Chat } from "../models/chat";
import { Contacts } from "../models/contacts";
import { Messages } from "../models/messages";
import { MessengerService } from "../services/messenger.service";

// import io from "socket.io-client";
// const SOCKET_ENDPOINT = "localhost:4200";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts;
  chats: Chat;
  messages: Messages;
  // socket;

  // Variables menu chat
  a = false;
  b = true;
  c = false;

  constructor(
    private sM: MessengerService,
    private rutaActiva: ActivatedRoute
  ) {
    // Obtener contactos
    this.sM.getContacts().subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener chats
    this.sM.getChat().subscribe(
      (data) => {
        this.chats = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener mensajes
    this.sM.getMessages().subscribe(
      (data) => {
        // data.mdate.replace(data.mdate, (Date.UTC - data.mdate));
        this.messages = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // this.showContacts();
    // this.showOpenChat();
    // this.showLastMessage();
    // this.setupSocketConnection();
  }

  // setupSocketConnection() {
  //   this.socket = io(SOCKET_ENDPOINT);
  // }

  // formatearFecha() {
  //   this.sM.getMessages().
  //     data.mdate.getHours;
  //   });
  // }

  // openChat(chat) {
  //   this.sM.openChat(chat);
  //   return false;
  // }
}
