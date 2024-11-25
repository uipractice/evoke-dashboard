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
        <h1 class="mt-12 ml-8 pt-2 text-4xl font-bold mb-4">{{ card.cardTitle }}</h1>
        <p class="ml-8 pr-11 text-base font-normal max-w-lg">{{ card.description }}</p>
      </div>
    } @else if((card.groupId == 1) && (card.id !== 4)) {
    <button (click)="openPdfInNewTab(card.pdfLink)">
      <div class="absolute inset-0 rounded-lg bg-opacity-50 flex flex-col text-left text-white">
        <h1 class="ml-6 mt-56 text-xl font-bold">{{ card.cardTitle }}</h1>
        <p class="ml-6 text-sm max-w-lg">{{ card.description }}</p>
      </div>
    </button>
    } @else if((card.groupId == 1) && (card.id === 4)) {
    <button (click)="openPdfInNewTab(card.pdfLink)">
      <div class="absolute inset-0 rounded-lg bg-opacity-50 flex flex-col text-left text-white">
        <h1 class="ml-6 mt-4 text-xl font-bold">{{ card.cardTitle }}</h1>
        <p class="ml-6 mt-48 text-3xl font-semibold	 max-w-lg">{{ card.description }}</p>
      </div>
    </button>
    } @else {
    <button (click)="openPdfInNewTab(card.pdfLink)">
      <div class="absolute inset-0 rounded-lg bg-opacity-50 flex flex-col text-left text-white">
        <h1 class="ml-8 mt-40 text-xl font-bold">{{ card.cardTitle }}</h1>
        <p class="ml-8 mr-6 text-sm font-normal max-w-lg line-clamp-2">{{ card.description }}</p>
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
