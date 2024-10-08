import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PageNotFoundComponent } from '../../shared/page-not-found.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PageNotFoundComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  pageTitle: string = 'Welcome To Home Page';

  Dashboards1 = [
    {
      // Template1: This is an template with 12 cols, background-img & content over bg-img....
      Template1: {
        id: 0,
        groupId: 0,
        cols: 12,
        cardTitle: 'UI/UX',
        description:
          'Empowering users with intuitive designs that enhance operational efficiency.',
        imageUrl: 'assets/images/UI-UX.png',
      },
    },
    {
      // Template1: This is an template with 4 cols, background-img & content over bg-img....
      Template1: {
        id: 1,
        groupId: 1,
        cols: 4,
        rows: 2,
        cardTitle: 'Evolve',
        description: 'The foundation for seamless experiences',
        imageUrl: 'assets/images/Evolve.jpg',
      },
    },
    {
      // Template2: This is an template with 4 cols, Img left side & content right side.....2 divs both in 2 rows
      // Template2_child: This is an template with 4 cols & row 1, Img left side & content right side.....
      id: 1,
      Template2_child: [
        {
          id: 2,
          cardTitle: 'Evoke Brand Book',
          description: 'The Blueprint to consistent Brilliance.',
          imageUrl: 'assets/images/EvokeBrBook.png',
        },
        {
          id: 3,
          cardTitle: 'Evoke Logo',
          description:
            'Evoke logos are available for download in multiple formats and dimensions.',
          imageUrl: 'assets/images/EvokeLogo.png',
        },
      ],
      cols: 4,
      rows: 1, // Half height stacked
    },
    {
      // Template1: This is an template with 4 cols, background-img & content over bg-img....
      Template1: {
        id: 4,
        groupId: 1,
        cols: 4,
        rows: 2,
        cardTitle: '2024',
        description: 'UX Trends',
        imageUrl: 'assets/images/EvokeBrBook.png',
      },
    },
    {
      // Template2: This is an template with 6 cols, Img left side & content right side.....
      Template2: {
        id: 5,
        groupId: 2,
        cols: 6,
        cardTitle: 'UX Standard Documents',
        description:
          "UX documentation is a repository of all information relevant to the user experience design process. Team members can always refer to this repository to see what has worked and what hasn't. This way, teams can build on past experiences and avoid making the same mistakes",
        imageUrl: 'assets/images/UXStandardDoc.png',
      },
    },
    {
      // Template2: This is an template with 6 cols, Img left side & content right side.....
      Template2: {
        id: 6,
        groupId: 2,
        cols: 6,
        cardTitle: 'Review Documents',
        description:
          'A critical step in ensuring the accuracy, clarity, and quality of a project or deliverable. It involves thoroughly examining the content to identify any errors, inconsistencies, or areas that need improvement, such as factual inaccuracies, unclear language, or missing information.',
        imageUrl: 'assets/images/ReviewDoc.png',
      },
    },
    {
      // Template1: This is an template with 4 cols, background-img & content over bg-img....
      Template1: {
        id: 7,
        groupId: 3,
        cols: 4,
        cardTitle: 'Blog',
        description:
          'A detailed analysis of a real-life scenario or project, exploring challenges, strategies, and outcomes to provide insights and practical lessons.',
        imageUrl: 'assets/images/Evolve.jpg',
      },
    },
    {
      // Template1: This is an template with 4 cols, background-img & content over bg-img....
      Template1: {
        id: 8,
        groupId: 3,
        cols: 4,
        cardTitle: 'Case Study',
        description:
          'Provides  the understanding of complex issues and informing decision-making by examining specific examples in depth.',
        imageUrl: 'assets/images/Evolve.jpg',
      },
    },
    {
      // Template1: This is an template with 4 cols, background-img & content over bg-img....
      Template1: {
        id: 9,
        groupId: 3,
        cols: 4,
        cardTitle: 'Whitepaper',
        description:
          'A detailed analysis of a real-life scenario or project, exploring challenges, strategies, and outcomes to provide insights and practical lessons.',
        imageUrl: 'assets/images/Evolve.jpg',
      },
    },
    {
      // Template2: This is an template with 4 cols, Img left side & content right side.....
      Template2: {
        id: 10,
        groupId: 4,
        cols: 4,
        cardTitle: 'UX Tools',
        description:
          "A web-based tool for designing, prototyping, and collaborating in real-time. It's widely used for interface design and has robust prototyping capabilities.",
        imageUrl: 'assets/images/UXTools.png',
      },
    },
    {
      // Template2: This is an template with 4 cols, Img left side & content right side.....
      Template2: {
        id: 11,
        groupId: 4,
        cols: 4,
        cardTitle: 'UX Best Practices',
        description:
          'Focus on creating intuitive, seamless, and enjoyable experiences for users.',
        imageUrl: 'assets/images/UXBestPractice.png',
      },
    },
    {
      // Template2: This is an template with 4 cols, Img left side & content right side.....
      Template2: {
        id: 12,
        groupId: 4,
        cols: 4,
        cardTitle: 'Quicklinks',
        description:
          'Provide easy access to frequently used or important sections, streamlining navigation for users.',
        imageUrl: 'assets/images/QuickLinks.png',
      },
    },
  ];
}
