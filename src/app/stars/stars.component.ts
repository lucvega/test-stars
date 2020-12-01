import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  stars: number[];
  starActive: number;
  starHover: number;

  constructor() { }

  ngOnInit() {
    this.stars = [1, 2, 3, 4, 5];
  }

  onMouseEnter(i: number): void {
    this.starHover = i + 1;
  }

  onMouseLeave(): void {
    this.starHover = null;
  }

  checkStar(i: number): void {
    this.starActive = i + 1;
  }

}
