import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-card',
  templateUrl: './main-content-card.component.html',
  styleUrls: ['./main-content-card.component.scss']
})
export class MainContentCardComponent implements OnInit {

  categories = ['Test', 'Test1']
  selectedCategory: string;

  constructor() { }

  ngOnInit() {
  }

}
