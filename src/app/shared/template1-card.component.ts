import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from './shared-service';

@Component({
  template: `
    @if(card.groupId == 0) {
      <div class="absolute inset-0 rounded-lg bg-opacity-50 flex flex-col text-left text-white">
        <h1 class="text-4xl font-bold mb-4">{{ card.cardTitle }}</h1>
        <p class="text-lg max-w-lg">{{ card.description }}</p>
      </div>
    } @else {
    <button (click)="openPdfInNewTab(card.pdfLink)">
      <div class="absolute inset-0 rounded-lg bg-opacity-50 flex flex-col text-left text-white">
        <h1 class="text-4xl font-bold mb-4">{{ card.cardTitle }}</h1>
        <p class="text-lg max-w-lg">{{ card.description }}</p>
      </div>
    </button>
    }
  `,
  selector: 'app-template1-card',
  standalone: true,
  imports: [FormsModule, HomeComponent, CommonModule],
})

export class Template1CardComponent implements OnInit {
  @Input() card: any; // Pass the card object from parent
  @Input() height: number = 200; // Pass the height dynamically, default is 200
  private sharedService = inject(SharedService);

  ngOnInit(): void {}

  // Method to set the PDF URL and navigate to the PDF component in an new tab
  openPdfInNewTab(pdfUrl: string): void {
    // Open the UI/pdf route with the PDF URL as a query parameter
    const pdfViewerUrl = `UI/pdf?pdfUrl=${encodeURIComponent(pdfUrl)}`;
    window.open(pdfViewerUrl, '_blank'); // Open the URL in a new tab
  }
}
