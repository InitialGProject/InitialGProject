import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Componentes del messenger
import { ContactsComponent } from "./contacts/contacts.component";
import { MessagesComponent } from "./messages/messages.component";
// Servicio del messenger
import { MessengerService } from "./services/messenger.service";
// Vistas del messenger
import { WidescreenLayoutComponent } from "./widescreen-layout/widescreen-layout.component";
import { SidechatLayoutComponent } from "./sidechat-layout/sidechat-layout.component";

@NgModule({
  declarations: [
    ContactsComponent,
    MessagesComponent,
    WidescreenLayoutComponent,
    SidechatLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [MessengerService],
  exports: [
    ContactsComponent,
    MessagesComponent,
    WidescreenLayoutComponent,
    SidechatLayoutComponent,
  ],
})
export class MessengerChatModule {}
