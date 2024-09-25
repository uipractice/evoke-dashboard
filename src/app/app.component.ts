import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
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
  Dashboards: Array<{ cardTitle: string; description: string; imageUrl: string }>  = [
    // { cardTitle: 'Evolve', description: 'The foundation for seamless experiences', imageUrl: 'assets/evolve.png' },
    // { cardTitle: 'Evoke Logo', description: 'Downloadable Logos in various formats', imageUrl: 'assets/evoke-logo.png' },
    // { cardTitle: '2024 UX Trends', description: 'Stay ahead with the latest UX trends', imageUrl: 'assets/ux-trends.png' },
    // Add more box items here
    { cardTitle: 'Evolve', description: 'The foundation for seamless experiences', imageUrl: 'assets/images/EvokeLogo.png' },
    { cardTitle: 'Evoke Logo', description: 'Downloadable Logos in various formats', imageUrl: 'assets/images/EvokeLogo.png' },
    { cardTitle: '2024 UX Trends', description: 'Stay ahead with the latest UX trends', imageUrl: 'assets/images/EvokeLogo.png' }
  ];

}


