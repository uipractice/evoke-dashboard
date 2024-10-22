import { Component, inject, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedService } from './shared-service';
import { ActivatedRoute } from '@angular/router';


@Component({
    template: `
      <br><span style="font-weight: bold; text-decoration: underline;">PDF </span>
      <!-- PDF Viewer Section -->
      <div class="pdf-viewer-container text-center">
        <pdf-viewer [src]="pdfSrc" [render-text]="true"
          [original-size]="false" style="width: 800px; height: 600px">
        </pdf-viewer>
      </div>
    `,
    standalone: true,
    imports: [PdfViewerModule],             // Import PdfViewerModule here
    selector: 'app-pdf',
})

export class EvokeStyleGuidePdfComponent implements OnInit{
  pdfSrc: string = '';

  // Inject the PdfService
  public sharedService = inject(SharedService);
  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    // Check for PDF URL from query parameters
    this.route.queryParams.subscribe(params => {
      if (params['pdfUrl']) {
        this.pdfSrc = decodeURIComponent(params['pdfUrl']); // Set the PDF URL from the query parameter
      } else {
        // Fallback to service if no URL in parameters
        this.sharedService.currentPdfUrl$.subscribe(url => {
          this.pdfSrc = url;  // Set the PDF URL in the component
        });
      }
    });
  }
}
