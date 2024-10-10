import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
      <h1 class="text-4xl font-bold mb-4">{{ card.cardTitle }}</h1>
      <p class="text-lg max-w-lg">{{ card.description }}</p>
    </div>
  `,
  selector: 'app-template1-card',
  standalone: true,
  imports: [FormsModule, HomeComponent, CommonModule],
})

export class Template1CardComponent implements OnInit {
  @Input() card: any; // Pass the card object from parent
  @Input() height: number = 200; // Pass the height dynamically, default is 200

  ngOnInit(): void {}

}

