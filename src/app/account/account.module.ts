import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      AccountRoutingModule
  ],
  declarations: [
      LayoutComponent,
      LoginComponent,
      RegisterComponent,
      ProfileComponent
  ]
})
export class AccountModule { }