import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "src/app/data-sharing.service";
import { Chat } from "../models/chat";

// Modelos
import { Chat_user } from "../models/chat_user";
import { Contacts } from "../models/contacts";
import { Messages } from "../models/messages";

// Servicios
import { MessengerService } from "../services/messenger.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts;
  chatuser: Chat_user;
  chat: Chat;
  messages: Messages;

  // Variables menu chat
  a = false;
  b = true;
  c = false;

  id;
  iduseract: number;
  parametro;
  idChat;
  datosChat;

  constructor(
    public sM: MessengerService,
    private dataSharingService: DataSharingService
  ) {
    //id usuariologged
    this.dataSharingService.iduseract.subscribe((value) => {
      this.iduseract = value;
    });
    // Obtener contactos
    this.sM.getContacts().subscribe(
      (data) => {
        this.contacts = data;
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener chatuser
    this.sM.getChatuser().subscribe(
      (data) => {
        this.chatuser = data;
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener chats
    this.sM.getChat().subscribe(
      (data) => {
        this.chat = data;
      },
      (error) => {
        console.log(error);
      }
    );
    // Obtener mensajes
    this.sM.getMessages().subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  // Crear un nuevo contacto (user-user) y lo envia al servicio MessengerService para subirlo a la bbdd
  setContacts() {
    let user: any = {
      user_id: this.iduseract,
      added_user: this.id,
    };
    this.sM.setContacts(user).subscribe((data) => {
      console.log(data);
    });
    alert("Contacto añadido!");

    let user2: any = {
      user_id: this.id,
      added_user: this.iduseract,
    };
    this.sM.setContacts(user2).subscribe((data) => {
      console.log(data);
    });

    this.id = "";
  }

  // Inicia un nuevo chat desde la agenda y lo manda al MessengerService para crearlo en la bbdd.
  // Ademas, crea las relaciones del chat-user para que los usuarios elegidos dispongan del chat
  openChat(parametro) {
    let chat: any = {
      name: "Chat " + this.iduseract + "-" + parametro,
      avatar: "groupChat.png",
      cdate: "2021-06-06 17:30:45",
    };
    this.sM.setChat(chat).subscribe((data) => {
      this.datosChat = data;
    });
    alert("Chat iniciado!");

    this.idChat = this.datosChat.id;

    let chatuser1: any = {
      user_id: this.iduseract,
      chat_id: this.idChat,
    };
    this.sM.setChatuser(chatuser1).subscribe((data) => {
      console.log(data);
    });
    let chatuser2: any = {
      user_id: parametro,
      chat_id: this.idChat,
    };
    this.sM.setChatuser(chatuser2).subscribe((data) => {
      console.log(data);
    });

    this.sM.parametro = this.idChat;
    console.log("param: ", this.idChat);
  }

  // Abre el chat disponible, recibe el parametro del chat seleccionado y
  // mediante el servicio de MessengerService lo pasa y abre en el componente messages
  selectChat(parametro) {
    this.sM.parametro = parametro;
    console.log("param: ", parametro);
  }
}
