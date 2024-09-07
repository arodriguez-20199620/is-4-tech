import { Component } from '@angular/core';
import DashboardComponent from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-material-exercises';
}
