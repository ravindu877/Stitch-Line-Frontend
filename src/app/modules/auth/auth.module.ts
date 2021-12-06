import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import { LoginItemsComponent } from './component/login-page/login-items/login-items.component';
import { SignUpItemsComponent } from './component/login-page/sign-up-items/sign-up-items.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from "@angular/material/select";
import {CookieModule} from "ngx-cookie";


@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginItemsComponent,
    SignUpItemsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatSelectModule,
    CookieModule.forRoot()
  ]
})
export class AuthModule { }
