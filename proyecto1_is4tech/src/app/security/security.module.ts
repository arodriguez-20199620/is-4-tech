import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninComponent } from './auth/google-signin/google-signin.component';
import { SecurityRoutingModule } from './security-routing.module';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [
    GoogleSigninComponent
  ],
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }
