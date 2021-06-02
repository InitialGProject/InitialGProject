import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactsComponent } from "./contacts/contacts.component";
import { MessagesComponent } from "./messages/messages.component";
import { WidescreenLayoutComponent } from "./widescreen-layout/widescreen-layout.component";
import { SidechatLayoutComponent } from "./sidechat-layout/sidechat-layout.component";

const messenger: Routes = [
  {
    path: "contacts",
    component: ContactsComponent,
  },
  {
    path: "messages",
    component: MessagesComponent,
  },
  {
    path: "chat",
    component: WidescreenLayoutComponent,
  },
  {
    path: "sidechat",
    component: SidechatLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(messenger), RouterModule.forChild(messenger)],
  exports: [RouterModule],
})
export class MessengerChatRoutingModule {}
