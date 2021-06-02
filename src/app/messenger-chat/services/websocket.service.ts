import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { Observable } from "rxjs";
// import * as Rx from "rxjs";
// import { environment } from "../../../environments/environment";
import { Messages } from "./../models/messages";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  io = io("http://localhost:3000/", {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() {
    // //enviamos esto al servidor
    // this.io.emit("test", { text: "hola puto" });
    // //recibe objeto del servidor
    // this.io.on("test2", (objeto) => {
    //   alert(objeto.text);
    // });
  }

  // private host: string = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
  //   socket: SocketIOClient.Socket;

  //   constructor(private name: string) {
  //     let socketUrl = this.host + '/' + this.name;
  //     this.socket = io.connect(socketUrl);
  //   }

  // // Get items observable
  // items(): Observable<any> {
  //   return Observable.create(observer => {
  //     this.socket.on('item', (item: any) => observer.next(item));
  //   });
  // }

  // // Request initial list when connected
  // list(): void {
  //   this.socket.emit('list');
  // }

  // // Create signal
  // create(params: any) {
  //   this.socket.emit('create', params);
  // }

  // // Remove signal
  // remove(params: any) {
  //   this.socket.emit('remove', params);
  // }

  // onConnect(): Observable<any> {
  //   return new Observable(observer => {
  //     this.socket.on('connect', () => observer.complete());
  //   })
  // }

  // onDisconnect(): Observable<any> {
  //   return new Observable(observer => {
  //     this.socket.on('disconnect', () => observer.complete());
  //   })
  // }

  // connect(): Rx.Subject<MessageEvent> {
  //   // If you aren't familiar with environment variables then
  //   // you can hard code `environment.ws_url` as `http://localhost:5000`
  //   // this.socket = io(environment.ws_url);
  //   this.socket = io("http://localhost:4200");
  //   // We define our observable which will observe any incoming messages
  //   // from our socket.io server.
  //   let observable = new Observable((observer) => {
  //     this.socket.on("message", (data) => {
  //       console.log("Received message from Websocket Server");
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   });

  //   // We define our Observer which will listen to messages
  //   // from our other components and send messages back to our
  //   // socket server whenever the `next()` method is called.
  //   let observer = {
  //     next: (data: Object) => {
  //       this.socket.emit("message", JSON.stringify(data));
  //     },
  //   };

  //   // we return our Rx.Subject which is a combination
  //   // of both an observer and observable.
  //   return Rx.Subject.create(observer, observable);
  // }
}
