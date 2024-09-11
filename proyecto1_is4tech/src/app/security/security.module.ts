import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninComponent } from './auth/google-signin/google-signin.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [
    GoogleSigninComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }
