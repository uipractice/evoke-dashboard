import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared-service';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss'
})

export class DevComponent implements OnInit {
  pageTitle: string = 'Welcome To UI/UX Page';
  private router = inject(Router);
  private sharedService = inject(SharedService)

  ngOnInit(): void {  }

  // Method to set the PDF URL and navigate to the PDF component
  navigateToPdf(pdfUrl: string): void {
    this.sharedService.setPdfUrl(pdfUrl);   // Set the selected PDF URL in the service
    this.router.navigate(['dev/pdf']);      // Navigate to the PDF viewer component
  }

}
