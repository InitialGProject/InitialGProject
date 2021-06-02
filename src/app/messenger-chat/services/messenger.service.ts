import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { DataSharingService } from "./../../data-sharing.service";

// Modelos
import { Contacts } from "../models/contacts";
import { Chat_user } from "../models/chat_user";
import { Chat } from "../models/chat";
import { Messages } from "../models/messages";

import { GlobalVars } from "../../globalVars";
// import { map } from "rxjs/operators";

// const baseUrl = GlobalVars.ruta + "messenger";

@Injectable({
  providedIn: "root",
})
export class MessengerService {
  // messages: Subject<any> = new Subject();
  isUserLoggedIn: boolean;
  iduseract: number;
  mensajes = [];

  constructor(
    private dataSharingService: DataSharingService,
    private socket: WebsocketService,
    private http: HttpClient
  ) {
    this.dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
    //id usuariologged
    this.dataSharingService.iduseract.subscribe((value) => {
      this.iduseract = value;
    });

    this.receiveMessage();

    // this.messages = <Subject<any>>wsService.connect().pipe(
    //   map((response: any): any => {
    //     return response;
    //   })
    // );
  }
  // Our simplified interface for sending
  // messages back to our socket.io server
  // sendMsg(msg) {
  //   this.messages.next(msg);
  // }

  getContacts(): Observable<Contacts> {
    return this.http.get<Contacts>("http://localhost:8080/useruser");
  }

  getChats(): Observable<Chat_user> {
    return this.http.get<Chat_user>("http://localhost:8080/chatuser");
  }

  getChat(): Observable<Chat> {
    return this.http.get<Chat>("http://localhost:8080/chat");
  }

  getMessages(): Observable<Messages> {
    return this.http.get<Messages>("http://localhost:8080/mensaje");
  }

  // createMessage(texto: string) {
  // let mensaje: Messages = {
  //   id: 3,
  //   chat_id: 1,
  //   sender_id: 5,
  //   message: texto,
  //   mdate: "now",
  // };
  // return this.getMessages;
  // }

  sendMessage(messageInfo) {
    this.mensajes.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);

    // console.log("Mensaje: ", this.message);
    // if (this.message.length === 0) {
    //   return;
    // }
    // this.servicioMessages.createMessage(this.message);
    // // .then(() => (this.mensaje = ""))
    // // .catch((error) => console.error("Error al enviar", error));
  }

  receiveMessage() {
    this.socket.io.on("receiveMessage", (messageInfo) => {
      messageInfo.messageType = 2;

      messageInfo.sender_id;

      this.mensajes.push(messageInfo);
      console.log("Nuevo mensaje recibido ");
    });
  }
}
