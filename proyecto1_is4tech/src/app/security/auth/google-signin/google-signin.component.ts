import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})
export class GoogleSigninComponent implements OnInit, OnDestroy {
  user: any = null;
  loggedIn: boolean = false;
  counter: number = 5;
  interval: any;
  authSubscription: Subscription | undefined;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.startCountdown();
      }
    });
  }

  startCountdown() {
    this.counter = 5;

    this.interval = setInterval(() => {
      this.counter--;
    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval); 
      this.router.navigate(['/dogs']);
    }, 5000);
  }

  ngOnDestroy() {
    console.log('GoogleSigninComponent destroyed');
    
    this.user = null;
    this.loggedIn = false;
    this.counter = 5;  
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }

    if (this.interval) {
      clearInterval(this.interval); 
    }

  }
}
