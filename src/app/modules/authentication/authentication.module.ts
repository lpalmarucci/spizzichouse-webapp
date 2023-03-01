import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from './authentication.component';
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: 'login',
    component: AuthenticationComponent
  }
]

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ]
})
export class AuthenticationModule {
}
