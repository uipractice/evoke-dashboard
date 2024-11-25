import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  // BehaviorSubject to store and share the PDF URL across components
  private pdfUrlSource = new BehaviorSubject<string>('');
  currentPdfUrl$ = this.pdfUrlSource.asObservable();

  // Method to set a new PDF URL
  setPdfUrl(url: string): void {
    this.pdfUrlSource.next(url);
  }

  // Method to get the current PDF URL (optional, could use currentPdfUrl directly)
  getPdfUrl(): string {
    return this.pdfUrlSource.getValue();
  }

}
