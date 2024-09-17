import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent implements OnInit {
  pageTitle: string = 'Welcome To QA Page';

  ngOnInit(): void {  }

}
