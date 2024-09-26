import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  pageTitle: string = 'Welcome To Home Page';

  ngOnInit(): void {}

}
