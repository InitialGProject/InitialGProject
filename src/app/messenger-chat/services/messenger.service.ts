import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { DataSharingService } from "./../../data-sharing.service";
import { GlobalVars } from "../../globalVars";

// Modelos
import { Contacts } from "../models/contacts";
import { Chat_user } from "../models/chat_user";
import { Chat } from "../models/chat";
import { Messages } from "../models/messages";
import { Usuarios } from "src/app/tienda/models/usuarios";

const baseUrl = GlobalVars.ruta;

@Injectable({
  providedIn: "root",
})
export class MessengerService {
  isUserLoggedIn: boolean;
  iduseract: number;
  addedUser: Contacts;
  mensajes = [];
  parametro;
  nombreUser;
  mensajeRecibido = false;

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
  }

  // Trae la tabla relacional de usuarios-usuarios (agenda) de la bbdd
  getContacts(): Observable<Contacts> {
    return this.http.get<Contacts>(
      `${baseUrl}` + `useruser?per-page=999999999`
    );
  }

  // Agrega un contacto nuevo a la bbdd
  setContacts(user: Contacts) {
    return this.http.post(`${baseUrl}` + `useruser`, user);
  }

  // Trae la tabla relacional de chats-usuarios de la bbdd
  getChatuser(): Observable<Chat_user> {
    return this.http.get<Chat_user>(
      `${baseUrl}` + `chatuser?per-page=999999999`
    );
  }

  // Establece una relacion nueva para la tabla relacional chat-usuario y guarda en la bbdd
  setChatuser(chatuser: Chat_user) {
    return this.http.post(`${baseUrl}` + `chatuser`, chatuser);
  }

  // Traer los chats de la bbdd
  getChat(): Observable<Chat> {
    return this.http.get<Chat>(`${baseUrl}` + `chat?per-page=999999999`);
  }

  // Creación de un chat, se gasta en el componente contacts
  setChat(chat: Chat) {
    return this.http.post(`${baseUrl}` + `chat`, chat);
  }

  // Traer los mensajes de la bbdd
  getMessages(): Observable<Messages> {
    return this.http.get<Messages>(`${baseUrl}` + `mensaje?per-page=999999999`);
  }

  // Enviar mensajes a socket y subirlos a la bbdd
  sendMessage(messageInfo) {
    this.mensajes.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);
    return this.http.post(`${baseUrl}` + `mensaje`, messageInfo);
  }

  // Recibir mensajes del socket
  receiveMessage() {
    this.socket.io.on("receiveMessage", (messageInfo) => {
      this.http
        .get<Usuarios>(`${baseUrl}usuarios/${messageInfo.sender_id}`)
        .subscribe((data) => {
          messageInfo.sender_id = data.nombre;
          this.mensajes.push(messageInfo);

          this.mensajeRecibido = true;
          console.log("se ilumina ");
          setTimeout(() => {
            this.mensajeRecibido = false;
            console.log("se apaga ");
          }, 10000);

          console.log("Nuevo mensaje recibido ");
        });
    });
  }
}
