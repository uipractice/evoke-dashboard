import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  pageTitle = 'Dashboard';
  title = 'evoke-dashboard';
Dashboards: any;
}

 const Dashboards = [
  { title: 'Evolve', description: 'The foundation for seamless experiences', imageUrl: 'assets/evolve.png' },
  { title: 'Evoke Logo', description: 'Downloadable Logos in various formats', imageUrl: 'assets/evoke-logo.png' },
  { title: '2024 UX Trends', description: 'Stay ahead with the latest UX trends', imageUrl: 'assets/ux-trends.png' },
  // Add more box items here
];
