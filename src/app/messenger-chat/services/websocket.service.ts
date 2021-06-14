import { Injectable } from "@angular/core";
import io from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  io = io("http://alum3.iesfsl.org:4202/", {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() {}
}
