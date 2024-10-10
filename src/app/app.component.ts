import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  pageTitle: string = 'Dashboard';
  title: string = 'evoke-dashboard';

  navLinks = [
    { label: 'Dashboard', path: '/Dashboard' },
    { label: 'AI', path: '/AI' },
    { label: 'CLOUD', path: '/Cloud' },
    { label: 'IT', path: '/IT' },
    { label: 'UI', path: '/UI' }
  ];


}


