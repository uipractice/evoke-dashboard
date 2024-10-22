import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { SharedService } from './shared-service';

@Component({
  template: `
    @if(card.groupId == 1) {
      <button (click)="openPdfInNewTab(card.pdfLink)">
        <div class="h-[132px] flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg">
          <div class="md:w-1/3 w-full">
            <img src="{{card.imageUrl}}" alt="Image Description" class=" h-[132px] object-cover rounded-lg">
          </div>
          <div class="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">{{card.cardTitle}}</h1>
            <p class="text-gray-700 mb-4">{{card.description}}</p>
          </div>
        </div>
      </button>
    } @else {
      <button (click)="openPdfInNewTab(card.pdfLink)">
        <div class="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg m-2">
          <div class="md:w-1/3 w-full">
            <img src="{{card.imageUrl}}" alt="Image Description" class=" h-[132px] object-cover rounded-lg">
          </div>
          <div class="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">{{card.cardTitle}}</h1>
            <p class="text-gray-700 mb-4">{{card.description}}</p>
          </div>
        </div>
      </button>
    }
  `,
  selector: 'app-template2-card',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent],
})

export class Template2CardComponent implements OnInit {
  @Input() card: any; // Pass the card object from parent
  // @Input() height: number = 200; // Pass the height dynamically, default is 200
  private sharedService = inject(SharedService);

  ngOnInit(): void {}

  // Method to set the PDF URL and navigate to the PDF component in an new tab
  openPdfInNewTab(pdfUrl: string): void {
    // Open the UI/pdf route with the PDF URL as a query parameter
    const pdfViewerUrl = `UI/pdf?pdfUrl=${encodeURIComponent(pdfUrl)}`;
    window.open(pdfViewerUrl, '_blank'); // Open the URL in a new tab
  }

}
