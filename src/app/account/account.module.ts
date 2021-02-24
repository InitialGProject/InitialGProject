import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SuscripcionesComponent
],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,      
      MatCardModule,
      MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
      MatPaginatorModule,
      AccountRoutingModule,
      //RouterModule
  ]
})
export class AccountModule { }