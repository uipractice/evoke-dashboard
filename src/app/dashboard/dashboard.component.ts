import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  @Input() boxData!: { cardTitle: string; description: string; imageUrl: string; };
}
