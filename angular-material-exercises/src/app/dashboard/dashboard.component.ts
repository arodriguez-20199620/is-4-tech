import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers, heroCalendar, heroWindow, heroTableCells, heroArrowUpCircle } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './dashboard.component.html',
  viewProviders: [provideIcons({ heroCalendar, heroUsers, heroWindow, heroTableCells, heroArrowUpCircle })]

})
export default class DashboardComponent {

}
