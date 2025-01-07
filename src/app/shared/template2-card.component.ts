import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { SharedService } from './shared-service';

@Component({
  template: `
  <div *ngIf="card">
  <ng-container [ngSwitch]="card.groupId">
    <!-- Group ID 1 -->
    <ng-container *ngSwitchCase="1">
      <ng-container *ngIf="card.id === 2">
        <!-- Card ID 2 -->
        <a [href]="card.pdfLink" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden h-auto sm:h-[132px]">
            <div class="w-full sm:w-1/3">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[132px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
            </div>
            <div class="w-full sm:w-2/3 px-6 py-4">
              <p class="text-16 sm:text-base text-gray-700 font-medium line-clamp-4 text-left">{{card.description}}</p>
            </div>
          </div>
        </a>
      </ng-container>

      <ng-container *ngIf="card.id === 3">
        <!-- Card ID 3 -->
        <a [href]="card.pdfLink" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col sm:flex-row items-center mt-3 bg-white shadow-lg rounded-lg h-auto sm:h-[132px]">
            <div class="w-full sm:w-1/3 h-[132px] flex justify-center items-center border-b sm:border-b-0 sm:border-r-2 border-gray-300">
              <img src="{{card.imageUrl}}" alt="Image Description" class="h-[38px] object-cover m-4 sm:m-6">
            </div>
            <div class="w-full sm:w-2/3 px-6 py-4">
              <p class="text-16 sm:text-base text-gray-700 font-medium line-clamp-4 text-left">{{card.description}}</p>
            </div>
          </div>
        </a>
      </ng-container>
    </ng-container>

    <!-- Group ID 2 -->
    <ng-container *ngSwitchCase="2">
      <a [href]="card.pdfLink" target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col overflow-hidden sm:flex-row items-center bg-white shadow-lg rounded-lg h-auto sm:h-[136px]">
          <div class="w-full sm:w-1/3">
            <img src="{{card.imageUrl}}" alt="Image Description" class="h-[134px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
          </div>
          <div class="w-full sm:w-2/3 px-6 py-4">
            <p class="text-16 sm:text-base text-gray-700 font-medium line-clamp-4 text-left">{{card.description}}</p>
          </div>
        </div>
      </a>
    </ng-container>

    <!-- Default case -->
    <ng-container *ngSwitchDefault>
      <a [href]="card.pdfLink" target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden h-auto sm:h-[132px]">
          <div class="w-full sm:w-1/3">
            <img src="{{card.imageUrl}}" alt="Image Description" class="h-[132px] w-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
          </div>
          <div class="w-full sm:w-2/3 p-3 py-6 px-4">
            <p class="text-16 sm:text-base text-gray-700 font-medium line-clamp-4 text-left">{{card.description}}</p>
          </div>
        </div>
      </a>
    </ng-container>
  </ng-container>
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

