import { Component, HostListener } from '@angular/core';
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
  isDropdownOpen = false;

  navLinks = [
    // { label: 'Dashboard', path: '/Dashboard' },
    { label: 'AI', path: '/AI' },
    { label: 'CLOUD', path: '/Cloud' },
    { label: 'IT', path: '/IT' },
    { label: 'UI/UX', path: ['/UI', '/UX'] }
  ];

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

}


