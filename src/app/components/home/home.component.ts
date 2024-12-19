import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PageNotFoundComponent } from '../../shared/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { Template1CardComponent } from '../../shared/template1-card.component';
import { Template2CardComponent } from '../../shared/template2-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PageNotFoundComponent, FormsModule, Template1CardComponent, Template2CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  pageTitle: string = 'Welcome To Home Page';
  Dashboards1: any=[];

  ngOnInit(): void {
    this.Dashboards1 = [
      {
        // Template1: This is an template with 12 cols, background-img & content over bg-img....
        Template1: {
          id: 0,
          groupId: 0,
          cols: "col-span-12",
          cardTitle: 'UI/UX',
          description:
            'Empowering users with intuitive designs that enhance operational efficiency.',
          imageUrl: 'assets/images/UI-UX.png'
        },
      },
      {
        // Template1: This is an template with 4 cols, background-img & content over bg-img....
        Template1: {
          id: 1,
          groupId: 1,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          rows: "row-span-2",
          cardTitle: 'Evolve',
          description: 'The foundation for seamless experiences',
          imageUrl: 'assets/images/Evolve.jpg',
          pdfLink: 'https://evokemail.sharepoint.com/:b:/s/UIPractice/EXyWhuE5MutClNd57LrHTFYB__M1FQMdMhKvgkDPZvbyWg?e=DdaQ6j'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 4 cols, Img left side & content right side.....2 divs both in 2 rows
        // Template2_child: This is an template with 4 cols & row 1, Img left side & content right side.....
        Template2_child: [
          {
            id: 2,
            groupId: 1,
            cardTitle: 'Evoke Brand Book',
            description: 'The Blueprint to consistent Brilliance.',
            imageUrl: 'assets/images/EvokeBrBook.png',
            pdfLink: '/assets/Pdf2.pdf'  // Unique link for Card
          },
          {
            id: 3,
            groupId: 1,
            cardTitle: 'Evoke Logo',
            description:
              'Evoke logos are available for download in multiple formats and dimensions.',
            imageUrl: 'assets/images/EvokeLogo.svg',
            pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
          },
        ],
        cols: "col-span-12 grid lg:col-span-4 relative rounded-lg sm:col-span-2 w-auto",
        rows: "row-span-1", // Half height stacked
        childlength: "grid-rows-2"
      },
      {
        // Template1: This is an template with 4 cols, background-img & content over bg-img....
        Template1: {
          id: 4,
          groupId: 1,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          rows: "row-span-2",
          cardTitle: '2024',
          description: 'UX Trends',
          imageUrl: 'assets/images/ux-trends.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 6 cols, Img left side & content right side.....
        Template2: {
          id: 5,
          groupId: 2,
          cols: "col-span-6",
          cardTitle: 'UX Standard Documents',
          description:
            "UX documentation is a repository of all information relevant to the user experience design process. Team members can always refer to this repository to see what has worked and what hasn't. This way, teams can build on past experiences and avoid making the same mistakes",
          imageUrl: 'assets/images/UXStandardDoc.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 6 cols, Img left side & content right side.....
        Template2: {
          id: 6,
          groupId: 2,
          cols: "col-span-6",
          cardTitle: 'Review Documents',
          description:
            'A critical step in ensuring the accuracy, clarity, and quality of a project or deliverable. It involves thoroughly examining the content to identify any errors, inconsistencies, or areas that need improvement, such as factual inaccuracies, unclear language, or missing information.',
          imageUrl: 'assets/images/ReviewDoc.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template1: This is an template with 4 cols, background-img & content over bg-img....
        Template1: {
          id: 7,
          groupId: 3,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          cardTitle: 'Blog',
          description:
            'A detailed analysis of a real-life scenario or project, exploring challenges, strategies, and outcomes to provide insights and practical lessons.',
          imageUrl: 'assets/images/Blog.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template1: This is an template with 4 cols, background-img & content over bg-img....
        Template1: {
          id: 8,
          groupId: 3,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          cardTitle: 'Case Study',
          description:
            'Provides  the understanding of complex issues and informing decision-making by examining specific examples in depth.',
          imageUrl: 'assets/images/CaseStudy.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template1: This is an template with 4 cols, background-img & content over bg-img....
        Template1: {
          id: 9,
          groupId: 3,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          cardTitle: 'Whitepaper',
          description:
            'A detailed analysis of a real-life scenario or project, exploring challenges, strategies, and outcomes to provide insights and practical lessons.',
          imageUrl: 'assets/images/Whitepaper.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 4 cols, Img left side & content right side.....
        Template2: {
          id: 10,
          groupId: 4,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          cardTitle: 'UX Tools',
          description:
            "A web-based tool for designing, prototyping, and collaborating in real-time. It's widely used for interface design and has robust prototyping capabilities.",
          imageUrl: 'assets/images/UXTools.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 4 cols, Img left side & content right side.....
        Template2: {
          id: 11,
          groupId: 4,
          cols: "col-span-12 sm:col-span-2 lg:col-span-4",
          cardTitle: 'UX Best Practices',
          description:
            'Focus on creating intuitive, seamless, and enjoyable experiences for users.',
          imageUrl: 'assets/images/UXBestPractice.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
      {
        // Template2: This is an template with 4 cols, Img left side & content right side.....
        Template2: {
          id: 12,
          groupId: 4,
          cols: "col-span-12 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4",
          cardTitle: 'Quicklinks',
          description:
            'Provide easy access to frequently used or important sections, streamlining navigation for users.',
          imageUrl: 'assets/images/QuickLinks.png',
          pdfLink: '/assets/Pdf1.pdf'  // Unique link for Card
        },
      },
    ];
  }

}
