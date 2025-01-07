import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink, RouterOutlet, DashboardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  pageTitle: string = 'Dashboard';
  title: string = 'evoke-dashboard';
  isDropdownOpen = false;

  navLinks = [
  //  { label: 'Dashboard', path: '/Dashboard' },
  //  { label: 'AI', path: '/ai' },
  //   { label: 'Data Science', path: '/data-science' },
  //  { label: 'IT', path: '/it' },
  //    { label: 'Java', path: '/java' },
  //    { label: 'LowCode', path: '/low-code' },
  //   { label: 'Microsoft', path: '/microsoft' },
  //    { label: 'Open Source', path: '/ppen-source' },
  //   { label: 'Oracle', path: '/oracle' },
  //   { label: 'Qa', path: '/qa' },
  //    { label: 'Rpa', path: '/rpa' },
  //    { label: 'Salesforce', path: '/Sales-force' },
     { label: 'UX', path: '/Ux' },

    { label: 'UI', path: '/UI' }
  ];
isPdf: any;
//isPdf: boolean = false;

  // Toggle the dropdown state
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close the dropdown
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  // Detect clicks outside the dropdown to close it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const dropdownButton = document.getElementById('menu-button');

    if (dropdownButton && !dropdownButton.contains(targetElement) && this.isDropdownOpen) {
      this.closeDropdown();
    }
  }
  routerSubscription!: Subscription;

  constructor(private readonly router: Router) {}


  ngOnInit(): void {
    // Subscribe to router events to detect URL changes
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL includes '/UI/pdf'
        if (event.urlAfterRedirects.includes('/UI/pdf')) {
          this.isPdf = true; // Set isPdf to true if the URL matches /UI/pdf
        } else {
          this.isPdf = false; // Set isPdf to false if the URL doesn't match
        }
      }
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe from router events to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}


