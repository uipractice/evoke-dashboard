import { Component, inject, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedService } from './shared-service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div class="text-center">
      <br>
      <span style="font-weight: bold; text-decoration: underline;">PDF Viewer</span>

      <!-- PDF Viewer Section -->
      <div class="pdf-viewer-container text-center">
        <pdf-viewer [src]="pdfSrc" 
                    [render-text]="true"
                    [original-size]="false" 
                    [page]="currentPage"
                    [zoom]="zoomLevel"
                    style="width: 1200px; height: 600px"
                    (after-load-complete)="afterLoadComplete($event)">
        </pdf-viewer>
      </div>

      <!-- Toolbar -->
      <div class="toolbar">
        <button (click)="prevPage()" [disabled]="currentPage <= 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage >= totalPages">Next</button>

        <!-- Zoom Controls -->
        <button (click)="zoomOut()">Zoom Out</button>
        <span>Zoom: {{ zoomLevel | number: '1.0-1' }}</span>
        <button (click)="zoomIn()">Zoom In</button>

        <!-- Download PDF -->
        <button (click)="downloadPDF()">Download PDF</button>
      </div>
    </div>
  `,
  standalone: true,
  imports: [PdfViewerModule, CommonModule],
  selector: 'app-pdf',
})

export class EvokeStyleGuidePdfComponent implements OnInit {
  pdfSrc: string | undefined;

  // Inject the PdfService
  public sharedService = inject(SharedService);
  private route = inject(ActivatedRoute);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const urlParam = params['pdfUrl'];

      if (urlParam) {
        // Decode URL and process SharePoint URL
        const decodedUrl = decodeURIComponent(urlParam); // First decode
        this.pdfSrc = this.processSharePointUrl(decodedUrl);
      } else {
        // Use shared service URL if available
        this.sharedService.currentPdfUrl$.subscribe(url => {
          this.pdfSrc = this.processSharePointUrl(decodeURIComponent(url));
        });
      }
    });
  }

  private processSharePointUrl(url: string): string {
    try {
      // Handle multiple possible encodings by decoding once more, just in case
      let processedUrl = decodeURIComponent(url);  // Decode URL again if needed

      // Ensure URL is properly formatted for PDF viewer
      processedUrl = processedUrl
        .replace(/%2F%2F/g, '//')  // Replace encoded forward slashes
        .replace(/%3A/g, ':')  // Replace encoded colons
        .replace(/%3F/g, '?')  // Replace encoded question marks
        .replace(/%3D/g, '=')  // Replace encoded equal signs
        .replace(/%26/g, '&'); // Replace encoded ampersands
       
      // Log the final processed URL for debugging
      console.log('Processed SharePoint URL:', processedUrl);

      return processedUrl;
    } catch (error) {
      console.error('Error processing URL:', url, error);
      return url;  // Fallback to the original URL if processing fails
    }
  }

  currentPage = 1; // Current page number
  totalPages = 0; // Total number of pages in the PDF
  zoomLevel = 1.0; // Default zoom level

  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  zoomIn() {
    if (this.zoomLevel < 3.0) {
      this.zoomLevel += 0.2;
    }
  }

  zoomOut() {
    if (this.zoomLevel > 0.4) {
      this.zoomLevel -= 0.2;
    }
  }

  downloadPDF() {
    if (!this.pdfSrc) {
      console.error('PDF source is not set.');
      return;
    }

    this.http.get(this.pdfSrc, { responseType: 'blob' }).subscribe({
      next: (data: Blob) => {
        const fileURL = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = 'downloaded-file.pdf';  // Set filename for download
        link.click();
      },
      error: (err) => {
        console.error('Failed to download the PDF:', err);
      }
    });
  }
}
