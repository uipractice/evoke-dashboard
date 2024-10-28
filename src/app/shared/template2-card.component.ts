import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { SharedService } from './shared-service';

@Component({
  template: `
    <div *ngIf="card">
      <!-- Group ID 1, Card ID 2 -->
      @if((card.groupId == 1) && (card.id === 2)) {
        <button (click)="openPdfInNewTab(card.pdfLink)">
          <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg h-auto sm:h-[132px]">
            <div class="w-full sm:w-1/3">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[132px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
            </div>
            <div class="w-full sm:w-2/3 p-3 sm:p-5">
              <h1 class="text-lg sm:text-xl font-medium text-gray-900 mb-2 text-left border-b border-solid pb-2">{{card.cardTitle}}</h1>
              <p class="text-sm sm:text-base text-gray-700 line-clamp-2 text-left">{{card.description}}</p>
            </div>
          </div>
        </button>
      }

      <!-- Group ID 1, Card ID 3 -->
      @else if((card.groupId == 1) && (card.id === 3)) {
        <button (click)="openPdfInNewTab(card.pdfLink)">
          <div class="flex flex-col sm:flex-row items-center mt-3 bg-white shadow-lg rounded-lg h-auto sm:h-[132px]">
            <div class="w-full sm:w-1/3 h-[132px] flex justify-center border-b sm:border-b-0 sm:border-r-2 border-gray-300">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[75px] object-cover m-4 sm:m-6">
            </div>
            <div class="w-full sm:w-2/3 p-3 sm:pl-6 sm:p-5">
              <h1 class="text-lg sm:text-xl font-medium text-gray-900 mb-2 text-left border-b border-solid pb-2">{{card.cardTitle}}</h1>
              <p class="text-sm sm:text-base text-gray-700 line-clamp-2 text-left">{{card.description}}</p>
            </div>
          </div>
        </button>
      }

      <!-- Group ID 2 -->
      @else if(card.groupId == 2) {
        <button (click)="openPdfInNewTab(card.pdfLink)">
          <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg m-2 h-auto sm:h-[166px]">
            <div class="w-full sm:w-1/3">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[166px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
            </div>
            <div class="w-full sm:w-2/3 p-3 sm:pl-6 sm:p-5">
              <h1 class="text-lg sm:text-xl font-medium text-gray-900 mb-2 text-left border-b border-solid pb-2">{{card.cardTitle}}</h1>
              <p class="text-sm sm:text-base text-gray-700 line-clamp-2 text-left">{{card.description}}</p>
            </div>
          </div>
        </button>
      }

      <!-- Default case -->
      @else {
        <button (click)="openPdfInNewTab(card.pdfLink)">
          <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg m-2 h-auto sm:h-[132px]">
            <div class="w-full sm:w-1/3">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[132px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
            </div>
            <div class="w-full sm:w-2/3 p-3 sm:py-5 sm:px-3">
              <h1 class="text-lg sm:text-xl font-medium text-gray-900 mb-2 text-left border-b border-solid pb-2">{{card.cardTitle}}</h1>
              <p class="text-sm sm:text-base text-gray-700 line-clamp-3 text-left">{{card.description}}</p>
            </div>
          </div>
        </button>
      }
    </div>
  `,
  selector: 'app-template2-card',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent],
})

export class Template2CardComponent implements OnInit {
  @Input() card: any;
  private sharedService = inject(SharedService);

  ngOnInit(): void {}

  openPdfInNewTab(pdfUrl: string): void {
    const pdfViewerUrl = `UI/pdf?pdfUrl=${encodeURIComponent(pdfUrl)}`;
    window.open(pdfViewerUrl, '_blank');
  }
}

