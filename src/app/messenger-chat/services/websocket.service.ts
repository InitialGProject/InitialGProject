import { Injectable } from "@angular/core";
import io from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  io = io("http://localhost:3000/", {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() {}
}
